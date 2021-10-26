import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../common/utils/validators/validators";
import styles from './Login.module.css'
import {login} from "../../redax/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field autoFocus placeholder={'email'} type={'email'} name={'email'} component={Input}
               validate={[required]}
        />
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} type={'password'} component={Input}
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
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe);

  }


  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return <div className={`bg ${styles.loginPage}`}>
    <h1> LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {login})(Login);