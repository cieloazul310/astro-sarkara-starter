import { defineConfig } from "@pandacss/dev";
import {
  createSarkaraPreset,
  astroComponentsPaths,
} from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    "@pandacss/dev/presets",
    createSarkaraPreset({ palette: { primary: "indigo", secondary: "amber" } }),
  ],
    
  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,astro}", ...astroComponentsPaths],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

    // The output directory for your css system
  outdir: "@cieloazul310/sarkara-css",
  emitPackage: true,
    
});
