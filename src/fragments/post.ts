import { graphql } from 'gatsby';

export const PostInfoFragment = graphql`
  fragment PostInfoFragment on MarkdownRemark {
    fields {
      slug
      date
    }
    frontmatter {
      name
      date
      title
      description
      tags
    }
  }
`;

export const PostContentFragment = graphql`
  fragment PostContentFragment on MarkdownRemark {
    html
    excerpt
  }
`;

export const PostDataFragment = graphql`
  fragment PostDataFragment on MarkdownRemark {
    ...PostInfoFragment
    ...PostContentFragment
  }
`;
