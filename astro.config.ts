import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from './src/mdx-classes';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  markdown: {
    rehypePlugins: [[rehypeClassNames, mdxClasses]],
  },
});
