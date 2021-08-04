import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {



	return (
		<div className={`bg ${style.dialogs}`}>
			<div>
				{props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
			</div>
			<div>
				{props.messageData.map(message => <Message message ={message.message}/>)}
			</div>
		</div>
	)
}

export default Dialogs;


