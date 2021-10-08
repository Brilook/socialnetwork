import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);


