import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils"

import { Poppins as FontSans } from 'next/font/google'
import Providers from "@/lib/providers/providers";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import ActiveSectionContextProvider from "@/context/active-section-context";


const fontSans = FontSans({
  subsets: ["latin"],
  weight: ['400', '600'],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Saiful | Portfolio",
  description: 'An portfolio built with Next.js, Postgres, Shadcn'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>

        <ActiveSectionContextProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
  
              {children}
            </ThemeProvider>
          </Providers>
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
