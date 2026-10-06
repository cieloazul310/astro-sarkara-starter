import { defineConfig } from "@pandacss/dev";
import { createSarkaraPreset } from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  preflight: true,
  presets: [
    "@pandacss/preset-base",
    "@pandacss/preset-panda",
    createSarkaraPreset({ primaryColor: "indigo", secondaryColor: "amber" }),
  ],
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "./node_modules/@cieloazul310/**/*.{js,ts,astro}",
  ],
  theme: {
    extend: {
      // customize theme
    },
  },
  outDir: "styled-system",
});

