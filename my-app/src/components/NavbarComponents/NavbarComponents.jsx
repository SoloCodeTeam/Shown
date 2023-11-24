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
          <div className="logo"><img src={Logoimg} alt="eror"/></div>
          <ul className={isOpen ? 'nav-links showNav' : 'nav-links'}>
            <li>Main</li>
            <li>Call</li>
            <li>About</li>
            <li>Service</li>
            <li>
              <input type="submit" value="Log In" className='blueButton ssapdButton' onClick={(e) =>navlink("/login")} />
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