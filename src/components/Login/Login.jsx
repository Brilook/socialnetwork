import React from 'react';
import {Field, reduxForm} from "redux-form";




const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'login'} name={'login'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
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
  return <div className={"bg"}>
    <h1> LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;