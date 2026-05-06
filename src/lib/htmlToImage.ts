export type ToPngOptions = {
  cacheBust?: boolean;
  pixelRatio?: number;
  width?: number;
  height?: number;
};

export async function toPng(node: HTMLElement, options: ToPngOptions = {}) {
  const width = options.width ?? 1080;
  const height = options.height ?? 1350;
  const pixelRatio = options.pixelRatio ?? 2;

  const clone = node.cloneNode(true) as HTMLElement;
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;

  const serializer = new XMLSerializer();
  const xhtml = serializer.serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%">${xhtml}</foreignObject></svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const targetUrl = options.cacheBust ? `${url}#${Date.now()}` : url;

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = targetUrl;
    });

    const canvas = document.createElement("canvas");
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("canvas not supported");

    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);

    return canvas.toDataURL("image/png");
  } finally {
    URL.revokeObjectURL(url);
  }
}
