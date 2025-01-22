import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ManifestOptions } from "vite-plugin-pwa";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const description =
  "Das Kassensystem für Vereinsanlässe. Bestellungen online per QR-Code oder beim Servicepersonal.";

export const seoConfig = {
  baseURL: "https://info.bstell.online",
  description,
  type: "website",
  image: {
    url: "/og-image.png",
    alt: description,
    width: 1200,
    height: 630,
  },
  siteName: "Bstell online",
  twitter: {
    card: "summary_large_image",
  },
} as const;

export const manifest: Partial<ManifestOptions> = {
  name: "Bstell online",
  short_name: "Bstell online",
  description,
  theme_color: "#0369a0",
  background_color: "#ffffff",
  display: "standalone",
  orientation: "portrait",
  start_url: "./docs/?utm_source=pwa",
  scope: ".",
  icons: [
    {
      src: "pwa-64x64.png",
      sizes: "64x64",
      type: "image/png",
    },
    {
      src: "pwa-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "maskable-icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
} as const;
