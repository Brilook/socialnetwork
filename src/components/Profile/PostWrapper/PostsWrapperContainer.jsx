import React from 'react';
import {connect} from "react-redux";
import Dialogs from "../../../Dialogs/Dialogs";
import {sendMessageCreator, updateMessageBodyCreator} from "../../../../redax/dialogsReducer";
import MyPosts from "../MyPosts";

const mapStateToProps = (state) => {
  return {
    localState: state.profilePage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default DialogsContainer;
