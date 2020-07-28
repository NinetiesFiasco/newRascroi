import React, { Component } from 'react';
import {connect} from 'react-redux'

class HeaderContainer extends Component {
  render() {
    return <Header
      login={this.props.login}
    />
  }
}

const mstp = (state) => {
  return {
    login: state.auth.login
  }
}

export default connect(mstp,{})(HeaderContainer);