import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atlas: {
          bg: "#070B1A",
          card: "#101A33",
          accent: "#7C6CFF",
          cyan: "#45D7FF",
          rose: "#FD77B9",
        },
      },
      boxShadow: {
        premium: "0 20px 60px rgba(13, 18, 40, 0.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(124,108,255,.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(69,215,255,.25), transparent 45%), linear-gradient(135deg, #070B1A 0%, #0F1530 45%, #151735 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
