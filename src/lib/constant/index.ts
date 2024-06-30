export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'BlogPlex'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'An BlogPlex built with Next.js, Postgres, Shadcn'

  export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Education",
      hash: "#education",
    },
    {
      name: "Blogs",
      hash: "/blogs"
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  
  ] as const;