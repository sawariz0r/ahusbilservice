import React from 'react';
import {
    Link
  } from 'react-router-dom'
//import logo from '../../assets/images/logo.png'

//import logo from '../../assets/images/logo.png';


function Header() {
  return (
    <header>

      <div className="header-grid-two">

          <div className="grid-item">    <Link to="/">STARTSIDA</Link>                  </div>
          <div className="grid-item">    <Link to="/Nyheter">NYHETER</Link>       </div>
          <div className="grid-item">    <Link to="/Produkter">GRÄSKLIPPARE</Link>   </div>
          <div className="grid-item">    <Link to="/Employees">ANSTÄLLDA</Link>   </div>
       
      </div>

    </header>
  );
}

export default Header;
