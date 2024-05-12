import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const iranYekan = localFont({
  variable: '--font-iran',
  src: [
    {
      path: '/fonts/iranyekan/light.ttf',
      weight: '400', // Regular weight (consider using "normal" instead of "medium")
    },
    {
      path: '/fonts/iranyekan/medium.ttf',
      weight: '500', // Regular weight (consider using "normal" instead of "medium")
    },
    {
      path: '/fonts/iranyekan/bold.ttf',
      weight: '700', // Bold weight
    },
    // ... Add other weights if needed
  ],
  subsets: ['arabic'], // Assuming your font supports Arabic characters
});

export const metadata = {
  title: 'Lidoma Trip',
  description: 'Lidoma Trip is a travel agency that offers the best travel packages to the most beautiful destinations in the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${iranYekan.variable} font-sans`}>{children}</body>
    </html>
  )
}
