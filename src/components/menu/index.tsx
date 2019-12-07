import React, { FC } from 'react';
import cx from 'classnames';
import './menu.scss';

export interface MenuProps {
  open: boolean;
}

const Menu: FC<MenuProps> = ({ open }) => (
  <div className={cx('menu', { 'menu--open': open })}>menu</div>
);

export default Menu;
