import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'La Delicia - Agua y Soda en La Plata y alrededores',
  description:
    'Soderia, fábrica de agua en La Plata comprometida con calidad y servicio desde 1957. Garantizamos acceso al agua envasada para la ciudad y sus alrededores.',
  keywords:
    'agua, soda, soderia, botellones, dispensers, La Plata, mineral, fábrica, distribuidora, retornables, descartables, frio, calor',
  icons: {
    icon: './assets/logo.png'
  },
  openGraph: {
    description:
      'Empresa de agua en La Plata comprometida con calidad y servicio desde 1957. Garantizamos acceso al agua envasada para la ciudad y sus alrededores.',
    title: 'La Delicia - Agua y Soda en La Plata y alrededor',
    type: 'website',
    countryName: 'Argentina',
    siteName: 'La Delicia',
    images: [
      {
        url: './assets/banner.png',
        width: 500,
        height: 500
      }
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
