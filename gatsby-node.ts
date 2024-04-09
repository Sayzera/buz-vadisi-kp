import { client } from "@/lib/sanityClient";
import * as path from "path";

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/assets": path.resolve(__dirname, "src/assets"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/lib": path.resolve(__dirname, "src/lib"),
      },
    },
  });
};


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
  query {
    allSanityProducts {
      edges {
        node {
          id
          _id
          title
          overview {
            ... on SanityBlock {
              _key
              _type
              children {
                text
              }
            }
            _key
            children {
              _key
              _type
              marks
              text
            }
            style
            listItem
            level
            _type
            _rawChildren(resolveReferences: {maxDepth: 10})
          }
          seo_description
          seo_keywords
          seo_title
          images {
            asset {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          sevkiyat {
            ... on SanityBlock {
              _key
              _type
              children {
                text
              }
            }
          }
          ozellikler {
            description
            title
          }
          slug {
            current
          }
          category {
            category_name
            slug {
              current
            }
          }
          rating {
            rating
            view_count
          }
        }
      }
    }
  }
`);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const productTemplates = path.resolve(`src/templates/product.tsx`)
  result.data.allSanityProducts.edges.forEach(({ node }) => {
    const path = `/ankara-paket-buz/${node.slug.current}`
    createPage({
      path,
      component: productTemplates,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        productData: node,
      },
    })
  })
}