import { useStaticQuery, graphql } from "gatsby";

export default function useContactData() {
  const { allSanityContact } = useStaticQuery(
    graphql`
    query MyContactQuery {
      allSanityContact {
        edges {
          node {
            work_hours {
              title
              work_hours
            }
            mail {
              title
              mail
            }
            geo_location {
              latitude
              longitude
            }
            contact_phone {
              title
              phone
            }
            contact_adress {
              title
              description
            }
            contact_image {
              asset {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: WEBP)
              }
            }
          }
        }
      }
    }
    `
  );
  return allSanityContact;
}
