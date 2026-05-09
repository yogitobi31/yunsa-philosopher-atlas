export type ToPngOptions = {
  pixelRatio?: number;
  width?: number;
  height?: number;
};

export async function toPngBlob(node: HTMLElement, options: ToPngOptions = {}) {
  const width = options.width ?? node.offsetWidth ?? 1080;
  const height = options.height ?? node.offsetHeight ?? 1350;
  const pixelRatio = Math.min(Math.max(options.pixelRatio ?? 2, 2), 3);

  const serializer = new XMLSerializer();
  const xhtml = serializer.serializeToString(node);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%">${xhtml}</foreignObject></svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(new Error(`Failed to decode SVG export image: ${String(err)}`));
      img.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("canvas context is not available");

    ctx.scale(pixelRatio, pixelRatio);
    ctx.drawImage(image, 0, 0, width, height);

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((pngBlob) => {
        if (!pngBlob) {
          reject(new Error("canvas.toBlob returned null"));
          return;
        }
        resolve(pngBlob);
      }, "image/png", 1);
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}
