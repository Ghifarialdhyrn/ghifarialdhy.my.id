import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghifarialdhy | Fullstack Web Developer",
  description:
    "Portfolio of Ghifarialdhy Rahmansyah Nitikusumah, a Software Engineering graduate specializing in React.js, Next.js, TypeScript, and modern web development.",
  icons: {
    icon: "/favicon.ico",
  },
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