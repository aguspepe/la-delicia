import Head from 'next/head'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const url = 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'La Delicia - Agua y Soda en La Plata y alrededores',
  description:
    'Soderia: Fábrica de agua comprometida con calidad y servicio desde 1957. Garantizamos acceso al agua envasada en La Plata y sus alrededores.',
  keywords:
    'agua, soda, soderia, botellones, dispensers, La Plata, mineral, fábrica, distribuidora, retornables, descartables, frio, calor',
  icons: {
    icon: './assets/logo.png'
  },
  openGraph: {
    description:
      'Soderia: Fábrica de agua comprometida con calidad y servicio desde 1957. Garantizamos acceso al agua envasada en La Plata y sus alrededores.',
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'La Delicia',
    description:
      'Soderia: Fábrica de agua comprometida con calidad y servicio desde 1957. Garantizamos acceso al agua envasada en La Plata y sus alrededores.',
    telephone: '(221) 4706997',
    url: url,
    logo: {
      '@type': 'ImageObject',
      url: './assets/logo.png'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'La Plata, Argentina',
      postalCode: '1900',
      streetAddress: 'Calle 49 nº 1972'
    }
  }
  return (
    <html lang='es'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
