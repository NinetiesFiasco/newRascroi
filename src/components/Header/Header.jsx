import React from 'react';

import Menu from "./Menu/MenuContainer.jsx"

class Header extends React.Component{

  render(){
    return(
        <nav>
          <Menu />
          {this.props.login?"Авторизован":"Не авторизован"}
        </nav>
    );
  }
}

export default Header;