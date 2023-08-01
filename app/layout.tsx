import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adrenalin Gym',
  description: 'Work hard or go home',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode
}) { console.log(params)
  return (

    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        
        </body>
    </html>
  )
}


