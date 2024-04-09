import { useStaticQuery, graphql } from "gatsby";

export default function useSSSData() {
  const { allSanitySss } = useStaticQuery(
    graphql`
    query MySSSQuery {
      allSanitySss {
        edges {
          node {
            _id
            answer
            question
          }
        }
      }
    }
    `
  );

  return allSanitySss;
}
