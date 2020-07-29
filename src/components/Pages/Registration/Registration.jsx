import React from 'react';
//import s from './Registration.module.css'
import {reduxForm} from 'redux-form'

import {Input,createField} from '../../Common/Forms/Forms'
import {requiredField} from '../../../utils/validators/validators'

const Registration = ({register}) => {

  const onSubmit = (form) => {
    register(form);
  }

  return <RegistrationForm onSubmit={onSubmit}/>
};

let RegistrationForm = props => {
  const { handleSubmit, error } = props
  return (
    <form onSubmit={handleSubmit}>
      {createField("Логин","login",[requiredField],Input)}
      {createField("Пароль","password",[requiredField],Input,{type: "password"})}
      {createField("Повторите пароль","repeat",[requiredField],Input,{type: "password"})}
      {createField("Email","email",[requiredField],Input)}
      {createField("ФИО","fio",[requiredField],Input)}
      {error &&
        <div style={{color: 'red'}}>{error}</div>
      }
      <button>Зарегистрировать</button>
    </form>
  )
}

RegistrationForm = reduxForm({form: "register"})(RegistrationForm)

export default Registration;