import './style.css'
import Logoimg from '../../images/Logo.png'
import axios from "axios"
import React, { useRef, useState } from 'react';
import BackImg from '../../images/BackImg.png'
import { SendedComponent } from '../../components/SendedComponent'

function LoginPage() {
    const signName = useRef()
    const signSurname = useRef()
    const signReferal = useRef()
    const signEmail = useRef()
    const signPassword = useRef()
    //
    let telegram_bot_id = "6811709016:AAG0zSXgtsbrcz6SvPtbbBTGVjnR9FdlCqw"
    let chat_id = 852898945
    let name, surname,username,email, message;
    let ready = () => {
        name = signName.current.value
        surname = signSurname.current.value
        username = signReferal.current.value
        email = signEmail.current.value
        message = "🎉New message for you :\n \n👤 Name: " + name +"\n👤 Surname: " + surname + "\n📂 Referal number:  " + username + "\n📧 Email:  "+ email + "\n \n Contact him now!"
    }
    let sendtelegram = function() {
        ready();
        axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {"chat_id": chat_id,"text": message})
        return false;
    };
    //
    const SendMessage = (e) => {
        e.preventDefault()
        sendtelegram();
        signName.current.value = null
        signSurname.current.value = null
        signReferal.current.value = null
        signEmail.current.value = null
        signPassword.current.value = null
    }
    const LoginReves = useRef();
    const LoginOpen = (e) =>{
      window.location.pathname = `/Client/${e.target.id}`
      if(!window.localStorage.getItem("LoginPath")){
        window.location.pathname = `/login`
      }
    }
    const SignFunct = () => {
        LoginReves.current.style.display = "block"
    }
    return (
        <>
            <>
            <div className="Login">
                <img className='LoginImgB' src={BackImg} />
                <div ref={LoginReves} className="LoginReves">
                    <SendedComponent/>
                </div>
                <div className="LoginPage">
                    <div className="container">
                        <div className="LoginPagedfDiv">
                            <div className="LoginPageLeftdiv">
                            <div className="LoginPagePath">
                                <a href='/' className='fa-solid fa-caret-left'></a>
                            </div>
                                <div className="LeftLogo">
                                    <img src={Logoimg} alt="" />
                                </div>
                                <div className="LeftText">
                                    <h2>Create your account</h2>
                                    <p>Quickly sign up with your ads account.</p>
                                </div>
                                <div className="LEftInputs">
                                    <form action="/action_page.php" onSubmit={SendMessage}>
                                        <div className='fnamediv'>
                                            <div class="group">
                                                <input ref={signName} type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Name</label>
                                            </div>
                                            <div class="group">
                                                <input ref={signSurname} type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Last Name</label>
                                            </div>
                                        </div>
                                        <div class="groupW100">
                                            <input ref={signEmail} type="email" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Email</label>
                                        </div>
                                        <div className="fnamedivs">
                                            <div class="groupW100">
                                                <input ref={signPassword} type="password" required />
                                                <span class="highlightW100"></span>
                                                <span class="barW100"></span>
                                        <div className="fnamediv">
                                            <div class="group">
                                                <input type="password" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Password</label>
                                            </div>
                                            <div class="group">
                                                <input type="password" required />
                                                <span class="highlightW100"></span>
                                                <span class="barW100"></span>
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                        <span>
                                        </span>
                                                <label className=''>Referal</label>
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Referal</label>
                                            </div>
                                        </div>
                                        <div class="groupW100">
                                            <input type="email" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Telegram username</label>
                                        </div>
                                        <div className='checkboxbody'>
                                            <input id="c1" type="checkbox" required="true" />
                                            <label for="c1">I accept terms and privacy</label>
                                        </div>
                                        <span className='ssapd'>
                                            <input type="submit" value="Sign Up" className='blueButton' onClick={SignFunct} />
                                        </span>
                                    </form>
                                    <button className='LoginAlready' onClick={LoginOpen}>Already have an account? <p onClick={LoginOpen}>Sign in</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        </>
    );
}
export default LoginPage;