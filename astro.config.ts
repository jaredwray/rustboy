import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [mdx(), sitemap()],
  redirects: {
    "/blog/notes-in-progress": "/blog/",
    "/blog/a-quiet-stack": "/blog/",
    "/blog/writing-in-the-open": "/blog/",
    "/blog/media-lives-in-r2": "/blog/",
    "/blog/welcome-to-rustboy": "/blog/",
    "/blog/how-this-site-is-built": "/blog/",
  },

  markdown: {
    shikiConfig: {
      // Muted, low-chroma pair — the usual defaults are too blue next to ink
      // and vermilion.
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      // Emit both palettes as custom properties rather than baking one in, so
      // the theme toggle switches highlighting with everything else. See the
      // code block rules in src/styles/prose.css.
      defaultColor: false,
      wrap: false,
    },
  },
});
