import React from 'react';
import styles from "./NewPost.module.css"
import {addPostCreator, updateNewPostCreator} from "../../../../redax/state";


const NewPost = (props) => {


  const addPost = () => {
    props.dispatch(addPostCreator())
  }

  const updateNewPostText = () => {

    const textMessage = newPostElement.current.value;
    props.dispatch(updateNewPostCreator(textMessage));
  }

  const newPostElement = React.createRef();

  return (
    <div className={styles.newPost}>
      <label className={styles.label} htmlFor="newpost">Add new post</label>
      <textarea onChange={updateNewPostText} ref={newPostElement} className={`${styles.textarea} bg`} name="newpost"
                value={props.newPostText}/>
      <button onClick={addPost} className={`${styles.button} bg`}>Add</button>
    </div>
  )
}

export default NewPost;