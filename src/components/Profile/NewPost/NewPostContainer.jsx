import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redax/profileReducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {

const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator());
  };


  const updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostCreator(text));
  };

  return (
    <NewPost updateNewPostText={updateNewPostText} textAreaValue={state.profilePage.newPostText} addPost={addPost} btnValue="Add" />
  )
};

export default NewPostContainer;