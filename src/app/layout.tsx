import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyNavBar } from "@/components/MyNavBar";
import SplashWrapper from "@/components/SplashWrapper";
import ThemeToggle from "@/components/ThemeToggle"; // ← import du bouton
import { MyThemeProvider } from "@/components/MyThemeProvider";

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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MyThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <ThemeToggle />

        <SplashWrapper>
          <header>
            <MyNavBar />
          </header>
          <main className="content">{children}</main>
        </SplashWrapper>
        </MyThemeProvider>
      </body>
    </html>
  );
}
