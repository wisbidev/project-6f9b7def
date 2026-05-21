import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aiteam - AI Team. Không cần thuê dev.',
  description: 'Nền tảng AI tự động build phần mềm của bạn qua Telegram. Từ ý tưởng đến deploy — hoàn toàn tự động.',
  openGraph: {
    title: 'aiteam - AI Team. Không cần thuê dev.',
    description: 'Nền tảng AI tự động build phần mềm qua Telegram.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
