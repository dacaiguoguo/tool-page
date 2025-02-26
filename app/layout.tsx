import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tool Page',
    description: 'A collection of useful tools',
}

export default async function RootLayout(
    props: {
        children: React.ReactNode
        params: Promise<{ lang: string }>
    }
) {
    const params = await props.params;
    const { children } = props;
    const { lang } = params;

    return (
        <html lang={lang}>
            <head>
                {/* <!-- Favicon --> */}
                <link rel="icon" type="image/svg+xml" href="/image/AccurateScribe.ai.svg" />
            </head>
            <body className="min-h-screen bg-blue-50">
                {children}
            </body>
        </html>
    )
}
