import React, { useRef, useState } from 'react';
import Logoimg from '../../images/Logo.png'
import axios from "axios"
import './style.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const SignupModal = useRef()
  const SignupBtn = useRef()
  const SignupOverlay = useRef()
  const signName = useRef()
  const signSurname = useRef()
  const signUsername = useRef()
  const signMessage = useRef()
  const signEmail = useRef()
  //
  let telegram_bot_id = "6811709016:AAG0zSXgtsbrcz6SvPtbbBTGVjnR9FdlCqw"
  let chat_id = 852898945
  let name, surname,username,email,mes, message;
  let ready = () => {
      name = signName.current.value
      surname = signSurname.current.value
      username = signUsername.current.value
      mes = signMessage.current.value
      email = signEmail.current.value
      message = "🎉New message for you :\n \n👤 Name: " + name +"\n👤 Surname: " + surname + "\n📂 Telegram username:  " + username + "\n📧 Email:  "+ email +"\n✉️ Message:  " + mes  + "\n \n Contact him now!"
  }
  let sendtelegram = function() {
      ready();
      axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {"chat_id": chat_id,"text": message})
      return false;
  };
  //
  
  const OpenModal = () => {
    SignupModal.current.style.display = 'flex'
    SignupOverlay.current.style.display = "block"
  }
  const CloseModal = () => {
    SignupModal.current.style.display = 'none'
    SignupOverlay.current.style.display = "none"
  }
  const SendMessage = (e) => {
    e.preventDefault()
    sendtelegram();
    CloseModal()
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
              <form ref={SignupModal} className="signupModal" onSubmit={SendMessage}>
                  <h1>Oops!</h1>
                  <h3>Our Client Panel is not working yet.You can contact us by telegram. Of course, we will contact you</h3>
                  <h2>Write to our <span className='fa-brands fa-telegram'/> Telegram bot <span className='fa-solid fa-arrow-down'/></h2>
                  <input required ref={signName} type="text" placeholder='Your name' />
                  <input required ref={signSurname} type="text" placeholder='Your surname' />
                  <input required ref={signEmail} type="email" placeholder='Your email' />
                  <input required ref={signUsername} type="text" placeholder='Your Telegram username or phone number' />
                  <textarea required ref={signMessage} placeholder='Your message'></textarea>
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