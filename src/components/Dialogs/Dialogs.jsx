import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import NewPost from "../Profile/PostWrapper/NewPost/NewPost";

const Dialogs = (props) => {


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

      <NewPost onChange={props.updateMessageBody} add={props.sendMassage} textAreaValue={props.localState.newMessageBody}
               btnValue="Send"/>


    </div>
  )
}

export default Dialogs;


