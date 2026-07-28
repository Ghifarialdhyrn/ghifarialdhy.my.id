"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">
            Ghifarialdhy Rahmansyah Nitikusumah
          </h3>

          <p className="mt-2 text-zinc-500">Frontend Web Developer</p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/Ghifarialdhyrn" target="_blank">
            <FaGithub className="text-xl text-zinc-500 transition hover:text-white" />
          </Link>

          <Link href="https://linkedin.com/in/ghifarialdhyrn" target="_blank">
            <FaLinkedin className="text-xl text-zinc-500 transition hover:text-white" />
          </Link>

          <Link href="https://www.instagram.com/ghifarialdhy" target="_blank">
            <FaInstagram className="text-xl text-zinc-500 transition hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6">
        <p className="text-center text-sm text-zinc-500">
          © 2026 Ghifarialdhy Rahmansyah Nitikusumah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
