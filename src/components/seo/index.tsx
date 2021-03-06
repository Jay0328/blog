import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface Meta {
  name?: string;
  property?: string;
  content?: string;
}

export interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
}

export interface SiteInformationQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

function SEO({ title, description = '', lang = 'en', meta = [] }: SEOProps) {
  const { site } = useStaticQuery<SiteInformationQuery>(graphql`
    query SiteInformationQuery {
      site {
        siteMetadata {
          ...SiteInformationFragment
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultMeta: Meta[] = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(meta)}
    />
  );
}

export default SEO;
