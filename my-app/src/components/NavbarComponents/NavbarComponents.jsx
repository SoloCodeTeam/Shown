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
<<<<<<< HEAD
          <div className="logo"><img src="https://shown.io/static/images/logo.svg" alt="eror" /></div>
=======
          <div className="logo"><img src={Logoimg} alt="eror"/></div>
>>>>>>> 5ca4995916ce777ddbf679364ff204a1d127870d
          <ul className={isOpen ? 'nav-links showNav' : 'nav-links'}>
            <li><a href="tel:+998940808441">Call</a></li>
            <li><a href="#3">About</a></li>
            <li>Service</li>
            <li className='ww'>
              <button className='blueButton wws' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
            </li>
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