import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            imageLink
            twitterUsername
            socialUserNames {
              github
              devto
              twitter
              linkedin
            }
            siteLanguage
            siteLocale
            lastBuildDate
            firstName
            lastName
            developerName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
