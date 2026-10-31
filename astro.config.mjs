// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL / BASE_PATH are injected by the GitHub Pages workflow, so the same
// code works for https://<user>.github.io, a project page, or a custom domain.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://rohollahnaeijian.github.io",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
