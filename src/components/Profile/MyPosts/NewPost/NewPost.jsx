import React from 'react';
import styles from "./NewPost.module.css"

const NewPost = () => {
    
 
    return (
        <div className={styles.newPost}>
            <label className={styles.label}  htmlFor="newpost">Add new post</label>
            <textarea className={`${styles.textarea} bg`} name="newpost" ></textarea>

            <button className={`${styles.button} bg`}>Add</button>
        </div>
    )
}

export default NewPost;