import '../globals.css'
import { Footer, Header } from '@/components/shared'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ứng dụng',
  description: '',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className={'mt-20'}>{children}</main>
      </body>
    </html>
  )
}
