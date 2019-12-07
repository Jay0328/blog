import React, { FC, useState, useLayoutEffect } from 'react';
import cx from 'classnames';
import Header from '../header';
import Menu from '../menu';
import Footer from '../footer';
import './layout.scss';

const menuBreakPoint = 767;

const Layout: FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme] = useState('blue');

  useLayoutEffect(() => {
    function handler() {
      setMenuOpen(window.innerWidth > menuBreakPoint);
    }

    setTimeout(handler, 200);

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <div className={`theme-${theme}`}>
      <Header toggleMenu={() => setMenuOpen(prev => !prev)} />
      <Menu open={menuOpen} />
      <div
        className={cx('layout__container', {
          'layout__container--collapsed': menuOpen
        })}
      >
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
