import React, { useState } from 'react';
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <nav>
          <div className="logo"><img src="https://shown.io/static/images/logo.svg" alt="eror"/></div>
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
              <button>Sign Up</button>
              <button>Start</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;