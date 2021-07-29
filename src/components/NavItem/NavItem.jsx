import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={`bg ${style.nav}`}>
			<div className={style.item}>
				<a href='/profile'>profile</a>
			</div>
			<div className={style.item}>
				<a href='/dialogs'>dialogs</a>
			</div>
			<div className={style.item}>
				<a href='/photos'>photos</a>
			</div>
			<div className={style.item}>
				<a href='/music'>music</a>
			</div>
			<div className={style.item}>
				<a href='/friends'>friends</a>
			</div>
			<div className={style.item}>
				<a href='/setings'>setings</a>
			</div>
		</nav>
	)
};

export default Navbar;

