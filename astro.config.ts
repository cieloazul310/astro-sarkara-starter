import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import pandacss from "@pandacss/vite";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from './src/mdx-classes';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeClassNames, mdxClasses]],
    }),
  },
  vite: {
    plugins: [pandacss()],
  },
});
