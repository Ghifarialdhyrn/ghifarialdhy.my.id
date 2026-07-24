import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function SocialIcon({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-indigo-400
      "
    >
      {children}
    </Link>
  );
}