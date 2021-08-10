import React from 'react';
import styles from "./NewPost.module.css"

const NewPost = (props) => {


  const addPost = () => {
    const action = {type: 'ADD-POST'};
    props.dispatch(action)
  }

  const updateNewPostText = () => {

    const textMessage = newPostElement.current.value;
    const action = {type: 'UPDATE-NEW-POST-TEXT', newText: textMessage };
    props.dispatch(action);


  }

  const newPostElement = React.createRef();

    return (
        <div className={styles.newPost}>
            <label className={styles.label}  htmlFor="newpost">Add new post</label>
            <textarea onChange={updateNewPostText} ref={newPostElement} className={`${styles.textarea} bg`} name="newpost" value={props.newPostText}/>
            <button onClick={addPost} className={`${styles.button} bg`}>Add</button>
        </div>
    )
}

export default NewPost;