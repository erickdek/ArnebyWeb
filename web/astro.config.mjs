import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: node({
    mode: "standalone"
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