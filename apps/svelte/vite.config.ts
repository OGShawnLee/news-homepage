import UnoCSS from "unocss/vite";
import { presetUno } from 'unocss/preset-uno'
import { defineConfig } from "vite";
import { svelte as Svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    Svelte(),
    UnoCSS({
      shortcuts: {
        breakpoints: "mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl",
        "button-primary": "bg-red-500 rounded-xl text-lg text-white font-medium uppercase tracking-0.15em hover:bg-black"
      },
      theme: {
        colors: {
          "soft-orange": "#ECBA6A",
          "soft-red": "#F15E50",
          "white": "#FFFDFA",
          "grayish-blue": "#5D5F79",
          "grayish-blue-dark": "#00001A",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          raleway: ["Raleway", "sans-serif"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@root": resolve("src"),
      "@root/*": resolve("src/*"),
      "@lib": resolve("src/lib"),
      "@lib/*": resolve("src/lib/*"),
    },
  },
});
