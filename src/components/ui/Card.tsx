import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}