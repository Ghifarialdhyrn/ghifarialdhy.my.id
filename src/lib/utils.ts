import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 *
 * Example:
 * cn(
 *   "bg-white",
 *   isActive && "bg-black",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Delay helper.
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Format number.
 */
export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

/**
 * Scroll to element.
 */
export function scrollToId(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}