import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux'
import {enter} from '../../../redux/auth'

class LoginContainer extends Component {
  render() {
    return <Login 
      enter={this.props.enter}
    />
  }
}

const mstp = (state) => {
  return {

  }
}


export default connect(mstp,{enter})(LoginContainer);