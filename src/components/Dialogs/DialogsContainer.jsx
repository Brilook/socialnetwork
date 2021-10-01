import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//   const localState = props.store.getState().messagePage;
//
//   const sendMassage = () => {
//     props.store.dispatch(sendMessageCreator())
//   }
//
//   const updateMessageBody = (text) => {
//
//     props.store.dispatch(updateMessageBodyCreator(text));
//   }
//
//   return <Dialogs localState={localState} updateMessageBody={updateMessageBody} sendMassage={sendMassage}/>
// }

const mapStateToProps = (state) => {
  return {
    localState: state.messagePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (text) => {
      dispatch(updateMessageBodyCreator(text));
    },
    sendMassage: () => {
      dispatch(sendMessageCreator());
    },
  }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


