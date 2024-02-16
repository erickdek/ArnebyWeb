import { defineConfig } from "astro/config";
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