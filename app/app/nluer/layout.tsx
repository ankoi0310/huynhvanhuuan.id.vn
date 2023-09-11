import '@/app/globals.css'
import {
	AppHeader,
	Footer,
} from '@/components/layout'
import { ThemeProvider } from '@/components/provider/ThemeProvider'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const title = 'Application | NLUer'
const description = 'An application for students of Nong Lam University'
const url = 'https://huynhvanhuuan.id.vn/app/nluer'

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title,
	description,
	creator: 'Code With Koi',
	keywords: [
		'Koi',
		'Code With Koi',
		'NLUer',
	],
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'vi_VN',
		url,
		title,
		description,
		siteName: title,
	},
}

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={'!scroll-smooth'} suppressHydrationWarning>
			{
				googleAnalyticsId ? (
					<head>
						<Script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
						></Script>
						<Script id='google-anayltics-script'>
							{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
						</Script>
					</head>
				) : null
			}
			<body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
				<ThemeProvider attribute={'class'}>
					<AppHeader />
					<main className={'w-full min-h-screen flex flex-col'}>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
