import React from 'react';

export interface Pageprops {
  pageContext: {
    group: [];
    index: number;
    first: boolean;
    last: boolean;
    pathPrefix: string;
  };
  location: {
    href: string;
  };
}

const Page = ({ pageContext, location }: Pageprops) => {
  const { index, pathPrefix } = pageContext;
  const prevPage = index - 1;
  const nextPage = index + 1;
  const previousUrl = prevPage === 0 ? '' : `/${pathPrefix}/${prevPage}`;
  const nextUrl = `/${pathPrefix}/${nextPage}`;

  return (
    <>
      {location.href}
      {previousUrl}
      {nextUrl}
    </>
  );
};

export default Page;
