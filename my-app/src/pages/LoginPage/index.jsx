import './style.css'
import { NavLink } from 'react-router-dom';
import Logoimg from '../../images/Logo.png'
import BackImg from '../../images/BackImg.png'
import { SendedComponent } from '../../components/SendedComponent'
import { useRef } from 'react'

function LoginPage() {
    const LoginReves = useRef();
    const LoginOpen = (e) =>{
        window.location.pathname = `/Client/${e.target.id}`
        if(!window.localStorage.getItem("LoginPath")){
          window.location.pathname = `/login`
        }
      }
    const SignFunct = () =>{
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
                                {/* <div className="LeftLogo">
                                    
                                    <img src="https://shown.io/static/images/logo.svg" alt="" />
                                </div> */}
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
                                    <form action="/action_page.php">
                                        <div className='fnamediv'>
                                            <div class="group">
                                                <input type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Name</label>
                                            </div>
                                            <div class="group">
                                                <input type="text" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Last Name</label>
                                            </div>
                                        </div>
                                        <div class="groupW100">
                                            <input type="email" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Email</label>
                                        </div>
                                        <div className="fnamediv">
                                            <div class="group">
                                                <input type="password" required />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Password</label>
                                            </div>
                                            <div class="group">
                                                <input type="password" required />
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
                                            <input type="submit" value="Log In" className='blueButton ssapdButton' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`} />
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