import { useStaticQuery, graphql } from "gatsby";

export default function useHomeData() {
  const {allSanityHomePage} = useStaticQuery(
    graphql`
    query MyHomeQuery {
      allSanityHomePage {
        edges {
          node {
            _id
            _key
            _rawHalaSorularinizMiVar
            _rawHizmetlerimiz
            _rawPaletlerimiz
            _rawHomeBannerSlogan
            _rawSikcaSorulanSorular
            bannerImage {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
              }
            }
            banner_description
            button_phone
            hala_sorulariniz_mi_var {
              _key
              _type
              title
              description
              button_text
              button_link
            }
            hizmetlerimiz {
              _key
              _type
              title
              description
            }
            home_banner_slogan {
              _key
              _type
              title
              last_title
            }
            paletlerimiz {
              _key
              _type
              title
              description
            }
            sikca_sorulan_sorular {
              _key
              _type
              title
              description
            }
            product_titles
          }
        }
      }
    }
    `
  );

  return allSanityHomePage?.edges?.[0]?.node;
}
