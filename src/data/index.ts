import { defineSiteMetadata, defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = defineSiteMetadata({
	title: "Astro Sarkara Starter",
	description: "Starter project for astro-sarkara."
});
export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "Post", href: "/post" },
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
export const pageSize = 25;
