import React from 'react';
import './App.css';
import Header from './components/Header/HeaderContainer';
import Main from './components/Pages/Main/Main';
import Login from './components/Pages/Login/LoginContainer';
import {Route} from 'react-router-dom';
import Preloader from './components/Common/Preloader/Preloader';
import Registration from './components/Pages/Registration/RegistrationContainer';
import Orders from './components/Pages/Orders/OrdersContainer';


const App = ({init}) => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {!init && <Preloader/>}
      {init &&
        <main>
          <Route render={()=><Main/>} exact path="/"/>
          <Route render={()=><Login/>} path="/login"/>
          <Route render={()=><Registration/>} path="/registration"/>
          <Route render={()=><Orders/>} path="/orders"/>
        </main>
      }
    </div>
  );  
}

export default App;