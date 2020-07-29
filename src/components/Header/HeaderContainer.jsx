import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from './Header'

class HeaderContainer extends Component {
  render() {
    return <Header
      login={this.props.login}
      user={this.props.user}
    />
  }
}

const mstp = (state) => {
  return {
    login: state.auth.login,
    user: state.auth.user
  }
}

export default connect(mstp,{})(HeaderContainer);