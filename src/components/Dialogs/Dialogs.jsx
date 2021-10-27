import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import NewMessage from "../Profile/PostWrapper/NewPost/NewPost";
import {reduxForm} from "redux-form";
import {maxLength, required} from "../common/utils/validators/validators";

const NewMessageReduxForm = reduxForm({form: 'NewMessage'})(NewMessage);
const maxLength10 = maxLength(10);

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

      <NewMessageReduxForm onSubmit={props.sendMassage}
                           name={'newMessageBody'}
                           btnValue={'Send'}
                           required={required}
                           maxLength={maxLength10}/>


    </div>
  )
}

export default Dialogs;


