import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aiteam - AI Team tự động build phần mềm qua Telegram",
  description: "Nền tảng AI tự động build phần mềm của bạn qua Telegram. Từ ý tưởng đến deploy — hoàn toàn tự động.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
