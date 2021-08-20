import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redax/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


// const NewPostContainer = (props) => {
//
// const state = props.store.getState();
//
//   const add = () => {
//     props.store.dispatch(addPostCreator());
//   };
//
//
//   const updateNewText = (text) => {
//     props.store.dispatch(updateNewPostCreator(text));
//   };
//
//   return (
//     <NewPost onChange={updateNewText} textAreaValue={state.profilePage.newPostText} add={add} btnValue="Add" />
//   )
// };

const mapStateToProps = (state) => {
  return {
    textAreaValue: state.profilePage.newPostText,
    btnValue: "Add",
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => dispatch(updateNewPostCreator(text)),
    add: () => dispatch(addPostCreator()),
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost);

export default NewPostContainer;