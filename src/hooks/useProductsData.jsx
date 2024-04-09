import { useStaticQuery, graphql } from "gatsby";

export default function useProductsData() {
  const { allSanityProducts } = useStaticQuery(
    graphql`
    query {
        allSanityProducts(filter: {product_options: {ne: "5"}}) {
          edges {
            node {
              id
              rating {
                _key
                _type
                rating
                view_count
              }
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
              brand
            }
          }
        }
      }
    `
  );

  return allSanityProducts;
}
