import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from '@astrojs/tailwind';
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
      html: true,
      img: true,
      js: true,
      svg: false,
      logger: 1,
    }),
  ]
});