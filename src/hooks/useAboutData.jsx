import { useStaticQuery, graphql } from "gatsby";

export default function useAboutData() {
  const { allSanityAbout } = useStaticQuery(
    graphql`
    query MyAboutQuery {
      allSanityAbout {
        edges {
          node {
            _id
            description {
              _key
              _type
              title
              button_text
              button_link
              _rawDescription
            }
            images {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            video {
              video_image {
                asset {
                  url
                }
              }
              _key
              _type
              title
              video_link
              _rawDescription
            }
          }
        }
      }
    }
    `
  );
  return allSanityAbout;
}
