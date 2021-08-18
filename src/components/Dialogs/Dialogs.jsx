import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

  const onSendMassage = () => {
    props.sendMassage()
  }

  const onChangeMessage = (event) => {

    const newBody = event.currentTarget.value;
    props.updateMessageBody(newBody)
  }

  return (
    <div className={`bg ${style.dialogs}`}>
      <div>
        {props.localState.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)}
      </div>
      <div>
        {props.localState.messageData.map((message) => <Message key={message.id} message={message.message}/>)}
      </div>

      {/*//<NewPost/>*/}

      <div>
        <textarea onChange={onChangeMessage} value={props.localState.newMessageBody}/>
        <button onClick={onSendMassage}>Send</button>
      </div>

    </div>
  )
}

export default Dialogs;


