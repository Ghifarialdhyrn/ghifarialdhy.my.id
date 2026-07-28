import { HTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  size?: "sm" | "md" | "lg" | "xl" | "full";

  center?: boolean;
}

const sizes = {
  sm: "max-w-3xl",

  md: "max-w-5xl",

  lg: "max-w-7xl",

  xl: "max-w-[1440px]",

  full: "max-w-full",
};

export default function Container({
  children,

  className,

  size = "lg",

  center = true,

  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={twMerge(
        clsx(
          "w-full",

          "px-5",

          "sm:px-6",

          "lg:px-8",

          "xl:px-10",

          sizes[size],

          center && "mx-auto",

          className
        )
      )}
    >
      {children}
    </div>
  );
}