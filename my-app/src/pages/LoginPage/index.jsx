import './style.css'
import Logoimg from '../../images/Logo.png'
import axios from "axios"
import './style.css'
import BackImg from '../../images/BackImg.png'
import { SendedComponent } from '../../components/SendedComponent'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const signName = useRef()
    const signSurname = useRef()
    const signReferal = useRef()
    const signEmail = useRef()
    const signPassword = useRef()
    const signUsername = useRef()
    const navlink = useNavigate()
    //
    let telegram_bot_id = "6811709016:AAG0zSXgtsbrcz6SvPtbbBTGVjnR9FdlCqw"
    let chat_id = 852898945
    let name, surname,username,email,referal, message;
    let ready = () => {
        name = signName.current.value
        surname = signSurname.current.value
        username = signUsername.current.value
        email = signEmail.current.value
        referal = signReferal.current.value
        message = "🎉New message for you :\n \n👤 Name: " + name +"\n👤 Surname: " + surname + "\n📂 Referal number:  " + referal +"\n🏷 Telegram username: "+ username + "\n📧 Email:  "+ email + "\n \n Contact him now!"
    }
    let sendtelegram = function() {
        ready();
        axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {"chat_id": chat_id,"text": message})
        return false;
    };
    //
    const LoginReves = useRef();
    const LoginOpen = (e) =>{
        navlink(`/Client`)
        if(!window.localStorage.getItem("LoginPath")){
          navlink(`/login`)
        }
      }
    const SignFunct = (e) =>{
        e.preventDefault()
        sendtelegram();
        signName.current.value = null
        signSurname.current.value = null
        signReferal.current.value = null
        signEmail.current.value = null
        signPassword.current.value = null
        signUsername.current.value = null
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
                                <a onClick={() => navlink("/")} className='fa-solid fa-caret-left'></a>
                            </div>
                                <div className="LeftLogo">
                                    <img src={Logoimg} alt="" />
                                </div>
                                <div className="LeftText">
                                    <h2>Create your account</h2>
                                    <p>Quickly sign up with your ads account.</p>
                                </div>
                                <div className="LEftInputs">
                                    <form action="/action_page.php" onSubmit={SignFunct}>
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
                                        <div className="fnamediv">
                                            <div class="group">
                                                <input ref={signPassword} type="password" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Password</label>
                                            </div>
                                            <div class="group">
                                                <input ref={signReferal} type="password" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Referal</label>
                                            </div>
                                        </div>
                                        <div class="groupW100">
                                            <input ref={signUsername} type="text" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Telegram username</label>
                                        </div>
                                        <div className='checkboxbody'>
                                            <input id="c1" type="checkbox" required="true" />
                                            <label for="c1">I accept terms and privacy</label>
                                        </div>
                                        <span className='ssapd'>
                                            <input type="submit" value="Sign Up" className='blueButton'/>
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