import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Pages/Main/Main';
import Login from './components/Pages/Login/LoginContainer';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Route render={()=><Main/>} exact path="/"/>
        <Route render={()=><Login/>} path="/login"/>
      </main>
    </div>
  );
}

export default App;
