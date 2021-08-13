import React from 'react';
import styles from "./NewPost.module.css"
import {addPostCreator, updateNewPostCreator} from "../../../../redax/profileReducer";


const NewPost = (props) => {


  const addPost = () => {
    props.dispatch(addPostCreator())
  }

  const updateNewPostText = (event) => {

    const textMessage = event.currentTarget.value;
    props.dispatch(updateNewPostCreator(textMessage));
  }

  return (
    <div className={styles.newPost}>
      <textarea onChange={updateNewPostText} className={`${styles.textarea} bg`} name="newpost"
                value={props.newPostText}/>
      <button onClick={addPost} className={`${styles.button} bg`}>Add</button>
    </div>
  )
}

export default NewPost;