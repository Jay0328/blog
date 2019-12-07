import React, { FC, useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import Footer from '../footer';

const Layout: FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme] = useState('blue');

  return (
    <div className={`theme-${theme}`}>
      <Header toggleMenu={() => setMenuOpen(prev => !prev)} />
      <Menu open={menuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
