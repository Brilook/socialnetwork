import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../../redax/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


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

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;