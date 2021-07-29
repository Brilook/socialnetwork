import React from 'react';
import style from './Navbar.module.css'
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
	return (
		<nav className={`bg ${style.nav}`}>
			<NavItem name="profile" />
			<NavItem name="dialogs" />
			<NavItem name="friends" />
			<NavItem name="photos" />
			<NavItem name="music" />
			<NavItem name="settings" />
		</nav>
	)
};

export default Navbar;

