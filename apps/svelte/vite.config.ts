import unocss from "unocss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte(), unocss()],
  resolve: {
    alias: {
      "@lib": resolve("src/lib"),
      "@lib/*": resolve("src/lib/*"),
    }
  }
});
