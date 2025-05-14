'use client'

import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import {ReduxProvider} from '@/lib/StoreProvider'


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
            >
                <ReduxProvider>
                    <Header />
                    <div className="mx-20 my-10">{children}</div>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    )
}
