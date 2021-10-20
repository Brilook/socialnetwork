import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../common/utils/validators/validators";
import styles from './Login.module.css'


const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field autoFocus placeholder={'login'} name={'login'} component={Input}
               validate={[required]}
               />
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} component={Input}
               validate={[required]}
               />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'}
               /> remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  )
}

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div className={`bg ${styles.loginPage}`}>
    <h1> LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;