import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* 
  ═══════════════════════════════════════════════
  🛠️ UTILITY FUNCTIONS
  Tailwind class merger for conditional styling
  ═══════════════════════════════════════════════
*/

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
