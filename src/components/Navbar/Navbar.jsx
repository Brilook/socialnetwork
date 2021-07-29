import React from 'react';
import style from './Navbar.module.css'
import NavItem from './NavItem/NavItem';

const Navbar = () => {
  return (
    <nav className={`bg ${style.nav}`}>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />

    </nav>
  )
};

export default Navbar;