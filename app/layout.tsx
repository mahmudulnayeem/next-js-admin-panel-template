"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "next-themes"
// eslint-disable-next-line import/order
import { Inter } from "next/font/google"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import ThemeDataProvider from "@/context/theme-data-provider"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <GoogleTagManager gtmId="G-2WYR8S191X" />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <ThemeDataProvider>
              <main>
                <TooltipProvider>{children}</TooltipProvider>
              </main>
            </ThemeDataProvider>
          </ThemeProvider>
          <Toaster />
          <TailwindIndicator />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </QueryClientProvider>
    </html>
  )
}
