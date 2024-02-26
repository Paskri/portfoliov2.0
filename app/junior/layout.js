export const metadata = {
    title: 'Pascal Krieg, Alternance',
    description: 'Developpeur Web au K par K en alternance',
}

export default function RootLayout({ children }) {

    return (
        <html lang="fr">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}