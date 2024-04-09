import { useStaticQuery, graphql } from "gatsby";

export default function useNavbarData() {
  const { sanitySettings } = useStaticQuery(
    graphql`
      query navbarData {
        sanitySettings {
          id
          logo {
            asset {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 200
              )
            }
          }
        }
      }
    `
  );

  return sanitySettings;
}
