import type React from "react"
import type { MetadataRoute } from "next/server"
import ClientRootLayout from "./client-root-layout"

export const metadata: MetadataRoute = {
  title: "THE NODE",
  description: "A multi-functional venue for creativity, connection, and personal growth",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}


import './globals.css'