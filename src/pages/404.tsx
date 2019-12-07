import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';

export interface PageQuery {
  allSitePage: {
    edges: {
      node: {
        path: string;
      };
    }[];
  };
}

export interface NotFoundPageProps {
  data: PageQuery;
}

export const pageQuery = graphql`
  query AllPagePaths {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const NotFoundPage = ({ data }: NotFoundPageProps) => {
  return (
    <div>
      <SEO title="404: Not found" />
      <h4>找不到你的網頁，本站所有頁面為：</h4>
      {data.allSitePage.edges.map(page => (
        <Link to={page.node.path} key={page.node.path}>
          <li>{page.node.path}</li>
        </Link>
      ))}
    </div>
  );
};

export default NotFoundPage;
