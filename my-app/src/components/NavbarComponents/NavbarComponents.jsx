import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import LoginPage from '../../pages/LoginPage';
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlay = useRef();
  const modal = useRef();
  const SignModalOpen = () => {
    modal.current.style.display = 'flex'
    overlay.current.style.display = 'flex'
  }
  const SignModalClose = () => {
    modal.current.style.display = 'none'
    overlay.current.style.display = 'none'
  }
  return (
    <div className="nav">
      <div className="container">
        <nav>
          <div onClick={SignModalClose} ref={overlay} className="overlay"></div>
          <div ref={modal} className="SignModal">
            <LoginPage/>
          </div>
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
              <button onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
              <button onClick={SignModalOpen}>Sign Up</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;