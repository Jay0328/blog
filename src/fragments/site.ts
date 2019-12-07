import { graphql } from 'gatsby';

export const SiteTitleFragment = graphql`
  fragment SiteTitleFragment on SiteSiteMetadata {
    title
  }
`;

export const SiteInformationFragment = graphql`
  fragment SiteInformationFragment on SiteSiteMetadata {
    ...SiteTitleFragment
    description
    author
  }
`;
