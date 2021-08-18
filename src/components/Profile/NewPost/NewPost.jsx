import React from 'react';
import styles from "./NewPost.module.css"


const NewPost = (props) => {

  const onAdd = () => {
    props.add();
  };


  const onChange = (event) => {
    const text = event.target.value;

    props.onChange(text);
  };


  return (
    <div className={styles.newPost}>
      <textarea onChange={onChange} className={`${styles.textarea} bg`}
                value={props.textAreaValue}/>
      <button onClick={onAdd} className={`${styles.button} bg`}>{props.btnValue}</button>
    </div>
  )
};

export default NewPost;