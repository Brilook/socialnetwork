import React from 'react';
import style from "./NavItem.module.css";
import {NavLink} from "react-router-dom";


const NavItem = (props) => {

	return (
		<div className={style.item}>
			<NavLink to={`/${props.name}`} activeClassName = {style.active}>{props.name}</NavLink>
		</div>
	)
}

export default NavItem;