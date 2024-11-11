// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import compress from "astro-compress";
import { manifest, seoConfig } from "./src/lib/utils";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: "./tailwind.config.mjs",
    }),
    sitemap(),
    compress(),
    AstroPWA({
      strategies: "generateSW",
      manifest,
      registerType: "autoUpdate",
      workbox: {
        globDirectory: "dist",
        globPatterns: [
          "**/!(404).{html,js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,webmanifest}",
        ],
        navigateFallback: null,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern:
              /\.(?:html|js|css|svg|png|jpg|jpeg|gif|webp|woff|woff2|ttf|eot|ico|webmanifest)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "assets",
              expiration: {
                maxAgeSeconds: 604800, // 1 week
              },
            },
          },
        ],
      },
    }),
  ],
  devToolbar: { enabled: false },
});
