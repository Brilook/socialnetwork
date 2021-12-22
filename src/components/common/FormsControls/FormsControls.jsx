import React from 'react';
import styles from './FormControls.module.css'

export const Textarea = ( {input, meta, ...props} ) => {
const hasError = meta.touched && meta.error;
  return (
    <div className={ hasError ? `${styles.formControl} ${styles.error}` : `${styles.formControl}`}>
      <textarea {...props} {...input}/>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ( {input, meta, ...props} ) => {
const hasError = meta.touched && meta.error;
  return (
    <div className={ hasError ? `${styles.login} ${styles.error}` : `${styles.login}`}>
      <input {...props} {...input}/>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}