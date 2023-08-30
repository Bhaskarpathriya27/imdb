import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb: Ratings, Reviews, and Where to Watch the Best Movies &amp; TV Shows',
  description: 'IMDb is the worlds most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
