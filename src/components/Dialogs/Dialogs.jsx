import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import NewMessage from "../Profile/PostWrapper/NewPost/NewPost";
// import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";

const NewMessageReduxForm = reduxForm({form: 'NewMessage'})(NewMessage);

const Dialogs = (props) => {

const addNewMessage = (value) => (props.sendMassage(value.newMessageBody));
  return (
    <div className={`bg ${style.dialogs}`}>
      <div>
        {props.localState.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                id={dialog.id}/>)}
      </div>
      <div>
        {props.localState.messageData.map((message) => <Message key={message.id}
                                                                message={message.message}/>)}
      </div>

      <NewMessageReduxForm onSubmit={addNewMessage} name={'newMessageBody'} btnValue='Send'/>


    </div>
  )
}

export default Dialogs;


