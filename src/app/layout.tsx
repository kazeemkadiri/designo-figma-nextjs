import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

import Navbar from '@/components/Navbar/Navbar'
import ContainerPadding from '@/components/ContainerPadding/ContainerPadding'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Designo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-full relative" >
        <ContainerPadding><Navbar /></ContainerPadding>
        {children}
      </body>
    </html>
  )
}
