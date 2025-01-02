import Script from 'next/script'
import './globals.css'
import Head from "next/head"

const img = require('../public/logo1200x630.png')

export const metadata = {
  title: 'Pascal Krieg, Développeur Web',
  description: 'Developpeur Web au K par K',
  keywords: [
    'développeur web',
    'création site internet',
    'optimisation site web',
    'refonte site internet',
    'maintenance site web',
    'développeur freelance',
    'TPE PME',
    'artisan',
    'commerce local',
    'SEO',
    'accessibilité web',
    'performances web',
    'WordPress',
    'Next.js',
    'Symfony',
    'Strasbourg',
    'développeur indépendant',
    'site vitrine',
    'site eCommerce',
    'audit site internet',
    'responsive design'
  ],
  metadataBase: new URL('https://krieg.fr'),
  twitter: {
    card: 'summary',
    title: 'Pascal Krieg, Développeur Web au K par K',
    description: 'Création, optimisation, refonte et maintenance de site internet. Pour TPE/PME, entrepreneurs, artisans, commerces locaux.',
    creator: '@pascalkrieg',
    images: '/krieg-og.png',
  },
  openGraph: {
    title: 'Pascal Krieg, Développeur Web au K par K',
    type: 'website',
    description: 'Création, optimisation, refonte et maintenance de site internet sur Strasbourg et ses environs. Pour TPE/PME, entrepreneurs, artisans, commerces locaux.',
    url: 'https://krieg.fr',
    siteName: 'Pascal Krieg',
    images: [
      {
        url: '/krieg-og.png',
        width: 1200,
        height: 630,
        alt: 'Pascal Krieg, Développeur au K par K, création, optimisation, refonte et maintenance de site internet.',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pascal Krieg, Developpeur Web indépendant",
    "description": "Création de site internet, maintenance, correction de bug, ajout de fonctionnalités",
    "image": ["https://krieg.fr/krieg-og.png"],
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
        id="pk-schema"
        async=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="schema.org-jsonld"
      />

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
