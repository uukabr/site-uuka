"use client";

import { Toaster } from "@/components/ui/sonner";
import { Instrument_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-open-sans",
  preload: true,
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
