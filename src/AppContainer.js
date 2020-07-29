import React from 'react'
import {connect} from 'react-redux'
import {getInit} from './redux/auth'
import App from './App'

class AppContainer extends React.Component{
  componentDidMount() {
    this.props.getInit();
  }
  
  render(){
    return <App 
      init = {this.props.init}
    />
  }
}

const mstp = (state) => {
  return {
    init: state.auth.init
  }
}

export default connect(mstp,{getInit})(AppContainer)
