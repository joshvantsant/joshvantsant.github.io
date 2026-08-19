import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isVideoSrc(src: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(src);
}
