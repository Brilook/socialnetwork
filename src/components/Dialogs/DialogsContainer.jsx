import React from 'react';
import {sendMessageCreator} from "../../redax/dialogsReducer";
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
    sendMassage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);


