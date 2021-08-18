import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redax/profileReducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {

const state = props.store.getState();

  const add = () => {
    props.store.dispatch(addPostCreator());
  };


  const updateNewText = (text) => {
    props.store.dispatch(updateNewPostCreator(text));
  };

  return (
    <NewPost onChange={updateNewText} textAreaValue={state.profilePage.newPostText} add={add} btnValue="Add" />
  )
};

export default NewPostContainer;