import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Menu.module.css'

const Menu = ({links,exit}) => {

  let linksUI = links
    ?links.map((l,key)=><ShortLink key={key} to={l.to} name={l.name}/>)
    :null
  
  return (    
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav text-center">

          {linksUI}

          <li className="nav-item">
            <span className={"nav-link "+s.exit} onClick={exit}>Выйти</span>
          </li>

        </ul>
      </div>
    </nav>
  );
}

const ShortLink = ({to,name}) => {
  return (
    <li className="nav-item">
      <NavLink to={to} className={"nav-link"} activeClassName={"active"} exact>{name}</NavLink>
    </li>
  )  
}

export default Menu;