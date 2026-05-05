import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "윤리와 사상 철학자 아틀라스",
  description: "철학자를 외우는 앱이 아니라, 사상의 관계를 이해하는 앱",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
