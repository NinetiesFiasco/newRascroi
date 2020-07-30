import React from 'react'
import { createField,Input } from '../../../Common/Forms/Forms'
import { reduxForm } from 'redux-form'
import s from './Redact.module.css'
import { requiredField } from '../../../../utils/validators/validators'

const Redact = ({updateCart,carts,redactedIndex}) => {
  const onSubmit = (form) => {
    updateCart(form,redactedIndex);
  }
  return <RedactForm 
      onSubmit={onSubmit} 
      initialValues={{
        name: carts[redactedIndex].name,
        comment: carts[redactedIndex].comment
      }}
    />
}

let RedactForm = props => {
  const { handleSubmit, error } = props

  return (
    <form 
      onSubmit = {handleSubmit}      
    >
      {createField('Название','name',[requiredField],Input)}
      {createField('Комментарий','comment',[requiredField],Input)}
      {error &&
        <div style={s.error}>{error}</div>
      }
      <button>Сохранить</button>
    </form>
  )
}

RedactForm = reduxForm({form: 'Redact'})(RedactForm)

export default Redact