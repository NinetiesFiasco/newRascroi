import React from 'react';
import s from './Header.module.css'
import Menu from "./Menu/MenuContainer.jsx"

class Header extends React.Component{

  render(){
    const {login,user} = this.props;
    return(
        <nav className={s.container}>
          <Menu />
          <div className={s.authBlock}>
            { login ? "Авторизован" : "Не авторизован" } <br/>
            { user ? user.fio : "" }
          </div>
        </nav>
    );
  }
}

export default Header;