import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";
import NavBar from "@/app/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" data-theme='winter'>
      <body className={inter.className}>
      <div className='flex-col'>
        <NavBar/>
        <main className='p-5'>{children}</main>
      </div>
      </body>
    </html>
  )
}
