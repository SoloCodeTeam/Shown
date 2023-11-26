import React, { useState } from 'react';
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <nav>
          <div className="logo"><img src="https://shown.io/static/images/logo.svg" alt="eror" /></div>
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
              <button onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
              <button onClick={(e) => window.location.pathname = `/Sign/${e.target.id}`}>Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;