import React from 'react';
import style from "./NavItem.module.css";


const NavItem = (props) => {

	return (
		<div className={style.item}>
			<a href={`/${props.name}`}>{props.name}</a>
		</div>
	)
}

export default NavItem;