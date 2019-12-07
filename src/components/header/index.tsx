import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import './header.scss';

export interface SiteTitleQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export interface HeaderProps {
  toggleMenu: () => void;
}

function Header({ toggleMenu }: HeaderProps) {
  const data = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          ...SiteTitleFragment
        }
      }
    }
  `);

  return (
    <nav className="header">
      <svg
        className="header__menu-toggler"
        viewBox="0 0 24 24"
        focusable="false"
        fill="currentColor"
        onClick={toggleMenu}
      >
        <g>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </g>
      </svg>
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </nav>
  );
}

export default Header;
