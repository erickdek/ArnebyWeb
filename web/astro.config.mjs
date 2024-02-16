import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import compress from "astro-compress";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    preact({
      compat: true,
    }),
    sitemap({
      customPages: ["https://kluzko.tech/about", "https://kluzko.tech/contact"],
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress({
      css: true,
      html: false,
      img: true,
      js: true,
      svg: false,
      logger: 1,
    }),
  ]
});