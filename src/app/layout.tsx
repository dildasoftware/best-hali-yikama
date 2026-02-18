import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StickyContact } from "@/components/layout/StickyContact";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Halı Yıkama | Giresun Bulancak Halı Koltuk Yıkama",
  description: "Giresun Bulancak'ın en profesyonel halı yıkama merkezi. Halı, koltuk, yorgan, battaniye ve stor perde yıkama hizmetleri. ERA 111 teknolojisi. 0454 318 52 22",
  keywords: "halı yıkama giresun, bulancak halı yıkama, koltuk yıkama giresun, yorgan yıkama bulancak, best halı yıkama, halı yıkama fiyatları giresun",
  openGraph: {
    title: "Best Halı Yıkama | Giresun Bulancak",
    description: "Giresun Bulancak'ın en profesyonel halı yıkama merkezi. ERA 111 teknolojisi ile derinlemesine hijyen.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <StickyContact />
      </body>
    </html>
  );
}
