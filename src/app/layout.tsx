import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyNavBar } from "@/components/my-navbar";
import SplashWrapper from "@/components/splash-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio d'Elias",
  description: "Website made to improve in next.js (and potentially other languages)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SplashWrapper>
          <header>
            <MyNavBar />
          </header>
          <main className="content">{children}</main>
        </SplashWrapper>
      </body>
    </html>
  );
}
