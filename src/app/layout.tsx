import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Kind Sans will resolve via CSS (local name) with fallbacks; no local font file required

export const metadata: Metadata = {
  title: "nomo – Parking tickets, simplified.",
  description: "Scan, pay, and plan parking tickets across cities."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-kind-sans`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
