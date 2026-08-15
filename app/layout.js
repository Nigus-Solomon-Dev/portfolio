 import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Nigus Solomon | Full-Stack & Mobile App Developer',
  description:
    'Full-Stack & Mobile App Developer specializing in MERN, Next.js, and Flutter. Based in Addis Ababa, Ethiopia. Building SaaS, business systems, REST APIs, and real-time applications.',
  keywords: [
    'Full-Stack Developer',
    'Mobile App Developer',
    'Flutter Developer',
    'React Developer',
    'Next.js',
    'MERN Stack',
    'NestJS',
    'Addis Ababa',
    'Ethiopia',
    'Nigus Solomon',
  ],
  authors: [{ name: 'Nigus Solomon' }],
  openGraph: {
    title: 'Nigus Solomon | Full-Stack & Mobile App Developer',
    description:
      'Full-Stack & Mobile App Developer specializing in MERN, Next.js, and Flutter. Based in Addis Ababa, Ethiopia.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
