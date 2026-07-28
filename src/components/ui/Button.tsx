import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "outline";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  children,
  href,
  className,
  variant = "default",
  fullWidth,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const styles = cn(
    `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-6
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    `,
    
    variant === "default" &&
      `
      bg-white
      text-black
      hover:bg-zinc-200
      `,

    variant === "outline" &&
      `
      border
      border-zinc-700
      text-white
      hover:bg-zinc-900
      `,

    fullWidth && "w-full",

    className
  );


  if (href) {
    return (
      <Link href={href} className={styles}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }


  return (
    <button className={styles}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}