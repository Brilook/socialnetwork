import React from 'react';
import {connect} from "react-redux";
import {sendMessageCreator, updateMessageBodyCreator} from "../../../redax/dialogsReducer";
import PostWrapper from "./PostWrapper";

const mapStateToProps = (state) => {
  return {
    localState: state.profilePage.postData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper);

export default DialogsContainer;
