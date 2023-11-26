import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import './style.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navlink = useNavigate()
  const LoginOpen = (e) =>{
    // window.location.pathname = `/Client/${e.target.id}`
    // if(!window.localStorage.getItem("LoginPath")){
    //   window.location.pathname = `/login`
    // }
    // window.location.pathname = '/login'
    navlink("/login")
  }
  const SignOpen = (e) =>{
    // window.location.pathname = `/sign`
    navlink("/sign")
  }
  return (
    <div className="nav">
      <div className="container">
        <nav>
<<<<<<< HEAD
          <div className="logo"><img src="https://shown.io/static/images/logo.svg" alt="eror" /></div>
=======
>>>>>>> 6aa62c6a8a4240a01419e2b1dfd1d3b2a4e0e9f4
          <div className="logo"><img src={Logoimg} alt="eror"/></div>
          <ul className={isOpen ? 'nav-links showNav' : 'nav-links'}>
            <li><a href="tel:+998940808441">Call</a></li>
            <li><a href="#3">About</a></li>
            <li>Service</li>
<<<<<<< HEAD
            <li className='ww'>
              <button className='blueButton wws' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
=======
            <li className='btnlist'>
              <input type="submit" value="Log In" className='blueButton ssapdButton' onClick={(e) =>navlink("/login")} />
>>>>>>> 6aa62c6a8a4240a01419e2b1dfd1d3b2a4e0e9f4
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