import type { Metadata } from "next";
import "./globals.css";
import {Josefin_Sans} from 'next/font/google';
 
import { cn } from "@/lib/utils"

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "HTE SARL",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <head>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </head>
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          Josef.className
        )}>{children}</body>
      </html>
  );
}
