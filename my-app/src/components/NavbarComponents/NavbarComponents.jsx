import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import LoginPage from '../../pages/LoginPage';
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const LoginOpen = (e) =>{
    window.location.pathname = `/Client/${e.target.id}`
    if(!window.localStorage.getItem("LoginPath")){
      window.location.pathname = `/login`
    }
  }
  const SignOpen = (e) =>{
    window.location.pathname = `/sign`
  }
  return (
    <div className="nav">
      <div className="container">
        <nav>
          <div className="logo"><img src={Logoimg} alt="eror"/></div>
          <ul className={isOpen ? 'nav-links showNav' : 'nav-links'}>
            <li>Main</li>
            <li>Call</li>
            <li>About</li>
            <li>Service</li>
          </ul>
          <div className="ccar">
            <div className="menu" onClick={() => setIsOpen(!isOpen)}>
              <p> Menu</p>
            </div>
            <div className="buttons">
              <button onClick={LoginOpen}>Log In</button>
              <button onClick={SignOpen}>Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;