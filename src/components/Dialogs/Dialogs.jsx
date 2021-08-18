import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import NewPost from "../Profile/NewPost/NewPost";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/dialogsReducer";

const Dialogs = (props) => {

  const add = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onChangeText = (text) => {
    props.store.dispatch(updateMessageBodyCreator(text));
  };

  const messagePageData = props.store.getState().messagePage;
  return (
    <div className={`bg ${style.dialogs}`}>
      <div>
        {messagePageData.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                               id={dialog.id}/>)}
      </div>
      <div>
        {messagePageData.messageData.map((message) => <Message key={message.id}
                                                               message={message.message}/>)}
      </div>

      <NewPost onChange={onChangeText} add={add} textAreaValue={messagePageData.newMessageBody}
               btnValue="Send"/>


    </div>
  )
}

export default Dialogs;


