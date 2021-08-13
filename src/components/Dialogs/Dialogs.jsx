import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import NewPost from "../Profile/MyPosts/NewPost/NewPost";
import styles from "../Profile/MyPosts/NewPost/NewPost.module.css";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/state";

const Dialogs = (props) => {

  const sendMassage = () => {
    props.dispatch(sendMessageCreator())
  }

  const updateMessageBody = (event) => {

    const newBody = event.currentTarget.value;
    props.dispatch(updateMessageBodyCreator(newBody));
  }

  return (
    <div className={`bg ${style.dialogs}`}>
      <div>
        {props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)}
      </div>
      <div>
        {props.state.messageData.map((message) => <Message key={message.id} message={message.message}/>)}
      </div>

      {/*//<NewPost/>*/}

      <div>
        <textarea  onChange={updateMessageBody} value={props.state.newMessageBody}/>
        <button onClick={sendMassage}>Send</button>
      </div>

    </div>
  )
}

export default Dialogs;


