import '@/app/globals.css'
import {
	AppHeader,
	Footer,
} from '@/components/layout'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const title = 'Koi Wave'
const description = 'Download free videos.'
const url = 'https://huynhvanhuuan.id.vn/app/wave'

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title,
	description,
	creator: 'Code With Koi',
	keywords: [
		'Koi',
		'Koi Wave',
		'Code With Koi',
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
						<Script
							async
							src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
							strategy='lazyOnload'
							crossOrigin='anonymous'
						/>
					</head>
				) : null
			}
			<body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
				<ThemeProvider attribute={'class'}>
					<AppHeader
						title={'Koi Wave'}
						customMenu={
							<>
								{/* Language dropdown */}
								<div className={'relative'}>
									{/* <LanguageDropdown /> */}
									Languages
								</div>
							</>
						}
					/>
					<main className={'w-full min-h-screen flex flex-col'}>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
