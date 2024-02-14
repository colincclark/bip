import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colin & Francesca\'s Blogpost',
  description: 'We love travelling together around the world and recording our experiences here in on our blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
