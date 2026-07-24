"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-6 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/70 px-6 backdrop-blur-xl">
          <Link
            href="/"
            className="font-space text-xl font-bold"
          >
            Ghifar.
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/resume/cv.pdf"
            className="rounded-xl bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Resume
          </Link>
        </nav>
      </Container>
    </header>
  );
}