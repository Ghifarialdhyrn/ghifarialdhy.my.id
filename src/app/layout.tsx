import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",

  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="site-background" />
          <div className="site-noise" />
          <div className="site-vignette" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
