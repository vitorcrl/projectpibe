import React from 'react';
import logo from '../logo.svg';
import '../component/header.css';

function Header() {
  return (
    <div className="App-header">
      <header>
      <p >
      <img src={logo} className="App-logo-header" alt="logo" />
         Pibe Enseada
      
        </p>
        <a> Nossa História</a>
         <a> Contato</a>
      </header>
    </div>
  );
}

export default Header;
