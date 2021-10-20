import React from 'react';
import styles from "./NewPost.module.css"
import {Field} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const NewPost = (props) => {

  return (
    <form className={styles.newPost} onSubmit={props.handleSubmit} >
      <Field  name={props.name} component={Textarea} className={`${styles.textarea} bg`}
             placeholder={'type text'}
             validate={[props.required, props.maxLength ]}

      />
      <button className={`${styles.button} bg`}>{props.btnValue}</button>
    </form>
  )
};

export default NewPost;