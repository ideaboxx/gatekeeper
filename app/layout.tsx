import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import React from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("dark h-screen bg-background font-sans antialiased",fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
