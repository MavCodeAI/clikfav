import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ClikXo - Web Development, App Development, Graphics & Digital Marketing',
  description: 'Leading tech company specializing in web development, mobile app development, graphics design, and digital marketing solutions.',
  keywords: 'web development, app development, graphics design, digital marketing, React, Next.js, mobile apps, UI/UX design...',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  openGraph: {
    title: 'ClikXo - Premium Digital Solutions',
    description: 'Comprehensive digital solutions including web development, app development, graphics design, and digital marketing.',
    url: 'https://clikxo.com',
    siteName: 'ClikXo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
