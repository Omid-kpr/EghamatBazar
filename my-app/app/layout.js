import './globals.css'
import { Inter } from 'next/font/google'
import { } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lidoma Trip',
  description: 'Lidoma Trip is a travel agency that offers the best travel packages to the most beautiful destinations in the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
