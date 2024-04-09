import { useStaticQuery, graphql } from "gatsby";

export default function useServicesData() {
  const { allSanityServices } = useStaticQuery(
    graphql`
    query MyQuery {
      allSanityServices {
        edges {
          node {
            _id
            images {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            title
            overview
          }
        }
      }
    }
    `
  );
  return allSanityServices;
}
