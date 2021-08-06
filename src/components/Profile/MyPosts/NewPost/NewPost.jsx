import React from 'react';
import styles from "./NewPost.module.css"

const NewPost = () => {

  const addPost = () => {
    console.log(newPostElement.current.value)
  }

  const newPostElement = React.createRef();

    return (
        <div className={styles.newPost}>
            <label className={styles.label}  htmlFor="newpost">Add new post</label>
            <textarea ref={newPostElement} className={`${styles.textarea} bg`} name="newpost" ></textarea>

            <button onClick={addPost} className={`${styles.button} bg`}>Add</button>
        </div>
    )
}

export default NewPost;