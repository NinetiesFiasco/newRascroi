import React from 'react'
import {connect} from 'react-redux'
import Registration from './Registration'
import {register} from '../../../redux/register'

class RegistrationContainer extends React.Component{
  render(){
    return <Registration 
      success = {this.props.success}
      register = {this.props.register}
    />
    
  }
}

const mstp = (state) => {
  return {
    success: state.register.success
  }
}

export default connect(mstp,{register})(RegistrationContainer)
