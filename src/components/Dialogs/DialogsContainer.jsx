import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const localState = props.store.getState().messagePage;

  const sendMassage = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const updateMessageBody = (text) => {

    props.store.dispatch(updateMessageBodyCreator(text));
  }

  return <Dialogs localState={localState} updateMessageBody={updateMessageBody} sendMassage={sendMassage}/>
}

export default DialogsContainer;


