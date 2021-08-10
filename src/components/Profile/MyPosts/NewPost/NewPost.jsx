import React from 'react';
import styles from "./NewPost.module.css"

const NewPost = (props) => {


  const addPost = () => {
    props.addPost();
  }

  const updateNewPostText = () => {
    const textMessage = newPostElement.current.value;
    props.updateNewPostText(textMessage)


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