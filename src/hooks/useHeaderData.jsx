import { useStaticQuery, graphql } from "gatsby";

export default function useHeaderData() {
  const { sanitySettings } = useStaticQuery(
    graphql`
      query HeaderData {
        sanitySettings {
          id
          phone
          address
          discount_text
          facebook
          fax
          google_maps
          instagram
          short_description
          twitter
          youtube
          mail
          logo {
            asset {
              url
            }
          }
        }
      }
    `
  );
  return sanitySettings;
}
