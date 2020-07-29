import React from 'react';
import {reduxForm} from 'redux-form'

import { Input, createField } from '../../Common/Forms/Forms';
import { requiredField } from '../../../utils/validators/validators'

const Login = ({enter}) => {
  const mySubmit = (form) => {
    enter(form);
  }
  return <LoginForm onSubmit={mySubmit} />
};

let LoginForm = props => {
  const { handleSubmit,error } = props
  return (
    <form onSubmit={handleSubmit}>
      {createField("Login","login",[requiredField],Input)}
      {createField("Password","password",[requiredField],Input,{type:"password"})}
      {error &&
        <div style={{color:'red'}}>{error}</div>
      }
      <button>Войти</button>
    </form>
  )
}

LoginForm = reduxForm({form: "login"})(LoginForm);

export default Login;