import { defineConfig } from "astro/config";

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow.
// Locally and on Cloudflare they default to a root deployment.
export default defineConfig({
  site: process.env.SITE_URL || "https://example.org",
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
});
