import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	const path = `/dialogs/${props.id}`;
	return (
		<div className={style.dialog}>
			<NavLink to={path} >{props.name} </NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={style.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {

	return (
		<div className={`bg ${style.dialogs}`}>
			<div className={style.dialogsItems} >
				<DialogItem name={"brilook"} id={"1"}/>
				<DialogItem name={"Dimych"} id={"2"}/>
				<DialogItem name={"BkabLa"} id={"3"}/>
			</div>
			<div className={style.messages}>
				<Message message = 'Hi!!' />
				<Message message = 'Bay!!' />
				<Message message = '!!!!!' />
			</div>
		</div>
	)
}

export default Dialogs;