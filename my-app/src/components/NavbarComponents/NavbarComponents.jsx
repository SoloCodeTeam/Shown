import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const SignupModal = useRef()
  const SignupBtn = useRef()
  const SignupOverlay = useRef()
  const OpenModal = () => {
    SignupModal.current.style.display = 'flex'
    SignupOverlay.current.style.display = "block"
  }
  const CloseModal = () => {
    SignupModal.current.style.display = 'none'
    SignupOverlay.current.style.display = "none"
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
              <button onClick={(e) => window.location.pathname = `/Client/${e.target.id}`}>Log In</button>
              <button ref={SignupBtn} onClick={OpenModal}>Sign Up</button>
              <form ref={SignupModal} className="signupModal">
                  <h1>Oops!</h1>
                  <h3>Our Client Panel is not working yet.You can contact us by telegram. Of course, we will contact you</h3>
                  <h2>Write to our <span className='fa-brands fa-telegram'/> Telegram bot <span className='fa-solid fa-arrow-down'/></h2>
                  <input type="text" placeholder='Your name' />
                  <input type="text" placeholder='Your surname' />
                  <input type="text" placeholder='Your email' />
                  <input type="text" placeholder='Your Telegram username or phone number' />
                  <textarea placeholder='Your message'></textarea>
                  <button type='submit'>Send</button>
              </form>
              <div ref={SignupOverlay} onClick={CloseModal} className="SignupOverlay"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;