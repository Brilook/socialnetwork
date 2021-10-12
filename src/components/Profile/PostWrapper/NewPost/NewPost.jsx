import React from 'react';
import styles from "./NewPost.module.css"
import {Field, reduxForm} from "redux-form";


const NewPost = (props) => {


  return (
    <form className={styles.newPost} onSubmit={props.handleSubmit} >
      <Field name={props.name} component={'textarea'}  className={`${styles.textarea} bg`}
                placeholder={'type text'}/>
      <button className={`${styles.button} bg`}>{props.btnValue}</button>
    </form>
  )
};

export default NewPost;