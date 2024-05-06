import Script from 'next/script'
import './globals.css'
import Head from "next/head"

const img = require('../public/logo1200x630.png')

export const metadata = {
  title: 'Pascal Krieg, Développeur Web',
  description: 'Developpeur Web au K par K',
  twitter: {
    card: 'summary',
    title: 'Pascal Krieg, Développeur Web au K par K',
    description: 'Création, optimisation, refonte et maintenance de site internet. Pour TPE/PME, entrepreneurs, artisans, commerces locaux.',
    creator: '@pascalkrieg',
    images: [`${img.default.src || ''}`],
  },
  openGraph: {
    title: 'Pascal Krieg, Développeur Web au K par K',
    type: 'website',
    description: 'Création, optimisation, refonte et maintenance de site internet. Pour TPE/PME, entrepreneurs, artisans, commerces locaux.',
    url: 'https://krieg.fr',
    siteName: 'Pascal Krieg',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pascal Krieg, Developpeur Web indépendant",
    "description": "Création de site internet, maintenance, correction de bug, ajout de fonctionnalités",
    "image": ["", ""],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "26 rue César Julien",
      "addressLocality": "Strasbourg",
      "postalCode": "67200",
      "addressCountry": {
        "@type": "Country",
        "name": "France"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.58087,
      "longitude": 7.70392
    },
    "url": "https://krieg.fr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  }


  return (
    <html lang="fr">
      <Script
        async=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="schema.org-jsonld"
      />

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
