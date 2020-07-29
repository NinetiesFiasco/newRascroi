import React, { Component } from 'react';
import {connect} from 'react-redux'
import Menu from './Menu'
import {exit} from '../../../redux/auth'

class MenuContainer extends Component {
  render() {
    return <Menu
      links = {this.props.links}
      exit = {this.props.exit}
    />
  }
}

const mstp = (state) => {
  return {
    links: state.menu.links
  }
}

export default connect(mstp,{exit})(MenuContainer);