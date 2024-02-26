import './globals.css'
import Head from "next/head"

export const metadata = {
  title: 'Pascal Krieg, Développeur Web',
  description: 'Developpeur Web au K par K',
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
  const img = require('../public/logo1200x630.png')

  return (
    <html lang="fr">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@pascalkrieg" />
        <meta name="twitter:title" content="Pascal Krieg, Développeur Web au K par K" />
        <meta name="twitter:description" content="Création, optimisation, refonte et maintenance de site internet.
        Pour TPE/PME, entrepreneurs, artisans, commerces locaux." />
        <meta name="twitter:creator" content="@pascalkrieg" />
        <meta name="twitter:image" content={img.default.src || ''} />
        <meta property="og:title" content="Pascal Krieg, Développeur Web au K par K" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krieg.fr" />
        <meta property="og:image" content={img.default.src || ''} />
        <meta property="og:description" content="Création, optimisation, refonte et maintenance de site internet.
        Pour TPE/PME, entrepreneurs, artisans, commerces locaux." />
        <meta property="og:site_name" content="Pascal Krieg" />
        <script
          async=""
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="schema.org-jsonld"
        />
      </Head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
