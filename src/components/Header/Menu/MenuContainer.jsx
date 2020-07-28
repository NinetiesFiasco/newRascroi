import React, { Component } from 'react';
import {connect} from 'react-redux'
import Menu from './Menu';

class MenuContainer extends Component {
  render() {
    return <Menu
      links = {this.props.links}
    />
  }
}

const mstp = (state) => {
  return {
    links: state.menu.links
  }
}

export default connect(mstp,{})(MenuContainer);