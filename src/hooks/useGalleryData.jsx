import { useStaticQuery, graphql } from "gatsby";

export default function useGalleryData() {
  const { allSanityGalleri } = useStaticQuery(
    graphql`
    query MyGalleryQuery {
      allSanityGalleri {
        edges {
          node {
            images {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                altText
              }
            }
            _rawImages
            overview
            brand
            id
          }
        }
      }
    }
    `
  );
  return allSanityGalleri;
}
