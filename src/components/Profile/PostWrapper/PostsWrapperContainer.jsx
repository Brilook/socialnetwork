import React from 'react';
import {connect} from "react-redux";
import PostWrapper from "./PostWrapper";
import {addPostCreator} from "../../../redax/profileReducer";



const mapStateToProps = (state) => {
  return {
    localState: state.profilePage.postData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (value) => dispatch(addPostCreator(value.newPostBody)),
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper);

export default DialogsContainer;
