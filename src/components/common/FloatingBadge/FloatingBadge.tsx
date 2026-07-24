import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingBadge({
  children,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        `
        absolute
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/80
        backdrop-blur-xl
        px-4
        py-2
        text-sm
        shadow-xl
        `,
        className
      )}
    >
      {children}
    </div>
  );
}