import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Buz Vadisi`,
    description: `Ankara Toptan Palet Satışı`,
    twitterUsername: `@buzvadisi`,
    image:``,
    siteUrl: `https://illustrious-panda-b2d476.netlify.app`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qhy6rhpc",
        dataset: "production",
        token:"sk1a6MCUStSr9unzWECGNAaLqK84etorTHQQPbblSIXwK0cHgpBaJXEofM0elSY02gfJWGx83uuzWauNH",
        graphqlTag: "default",
        watchMode: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `source sans pro\:300,400,400i,700,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};

export default config;
