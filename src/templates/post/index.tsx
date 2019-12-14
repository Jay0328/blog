import React from 'react';
import { graphql } from 'gatsby';

export interface PageQuery {
  markdownRemark: {
    html: string;
  };
}

export interface PostProps {
  data: PageQuery;
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostDataFragment
    }
  }
`;

function Post({ data }: PostProps) {
  const { html } = data.markdownRemark;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Post;
