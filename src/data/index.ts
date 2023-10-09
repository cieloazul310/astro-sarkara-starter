import { defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = {
	title: "Astro Sarkara Starter",
	description: "Starter project for astro-sarkara."
};
export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "Page 2", href: "/page-2" },
  {
    title: "Link",
    items: [
      { title: "Astro", href: "https://astro.build/" },
      { title: "Panda CSS", href: "https://panda-css.com/" },
      {
        title: "GitHub Repo",
        href: "https://github.com/cieloazul310/astro-sarkara",
      },
    ],
  },
]);
