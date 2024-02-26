

export const metadata = {
  title: 'Pascal Krieg, Credits',
  description: 'Developpeur Web au K par K',
}

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
