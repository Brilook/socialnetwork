import React from 'react';
import styles from "./NewPost.module.css"


const NewPost = (props) => {


  const onAddPost = () => {
    props.addPost();
  };


  const onPostChange = (event) => {

    const textMessage = event.currentTarget.value;
    props.updateNewPostText(textMessage);
  };


  return (
    <div className={styles.newPost}>
      <textarea onChange={onPostChange} className={`${styles.textarea} bg`}
                value={props.textAreaValue}/>
      <button onClick={onAddPost} className={`${styles.button} bg`}>{props.btnValue}</button>
    </div>
  )
};

export default NewPost;