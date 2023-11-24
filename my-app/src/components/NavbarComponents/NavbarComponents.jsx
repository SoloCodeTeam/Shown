import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
              {/* <input type="submit" value="Log In" className='blueButton ssapdButton' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`} /> */}
            </li>
          </ul>
          <div className="ccar">
            <div className="menu" onClick={() => setIsOpen(!isOpen)}>
              <p> Menu</p>
            </div>
            <div className="buttons">
              <button onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
              <button onClick={() => window.location.pathname = `/sign`}>Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;