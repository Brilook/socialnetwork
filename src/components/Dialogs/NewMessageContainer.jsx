import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redax/dialogsReducer";
import NewPost from "../Profile/PostWrapper/NewPost/NewPost";


const NewMessageContainer = (props) => {
  debugger

const state = props.getState();

  const add = () => {
    props.dispatch(sendMessageCreator());
  };


  const onChangeText = (text) => {
    props.dispatch(updateMessageBodyCreator(text));
  };

  return (
    <NewPost onClick={add} textAreaValue={state.profilePage.newPostText} onChange={onChangeText} btnValue="Add" />
  )
};

export default NewMessageContainer;