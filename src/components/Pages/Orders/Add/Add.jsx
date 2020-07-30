import React from 'react';
import { createField,Input } from '../../../Common/Forms/Forms'
import {reduxForm} from 'redux-form'
import s from './Add.module.css'
import { requiredField } from '../../../../utils/validators/validators'

const Add = (props) => {
  const onSubmit = (form) => {
    props.addNewCart(form);
  }
  return <AddForm onSubmit={onSubmit} />
}


let AddForm = props => {
  const { handleSubmit, error } = props

  return (
    <form onSubmit={handleSubmit}>
      {createField("Название","name",[requiredField],Input)}
      {createField("Комментарий","comment",[requiredField],Input)}
      {error && 
        <div style={s.error}>{error}</div>
      }
      <button>Добавить</button>
    </form>
  )
}

AddForm = reduxForm({form: "addCart"})(AddForm)

export default Add;


