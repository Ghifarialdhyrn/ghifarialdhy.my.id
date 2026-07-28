"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({
  children,
}: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}