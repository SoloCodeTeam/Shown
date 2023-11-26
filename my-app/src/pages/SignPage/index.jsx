import LoginPage from '../LoginPage'
import Logoimg from '../../images/Logo.png'
import { useNavigate } from 'react-router-dom'
import './style.css'
import BackImg from '../../images/BackImg.png'
import { useRef } from 'react'
export function SignPage() {
    const invalidText= useRef();
    const navlink = useNavigate()
    const SignOpen = (e) =>{
        navlink(`/sign`)
    }
    return(
        <div className="Sign">
        <img className='LoginImgB' src={BackImg} />
        <div className="SignPage">
            <div className="">
                        <div className="LoginPagedfDiv">
                            <div className="LoginPageLeftdiv">
                                <div className="LoginPagePath">
                                    <a onClick={() => navlink("/")} className='fa-solid fa-caret-left'></a>
                                </div>
                                <div className="LeftLogo">
                                    <img src={Logoimg} alt="" />
                                </div>
                                <div className="LeftText">
                                    <h2>Welcome back</h2>
                                    <p>Enter your account</p>
                                </div>
                                <span className='invalidText' ref={invalidText}>
                                    <h5 >
                                    Wrong username or password.
                                    </h5>
                                </span>
                                <div className="LEftInputs">
                                    <form onSubmit={(e) => {e.preventDefault();
                                    invalidText.current.style.display="block"
                                        // navlink(`/Client/other`)
                                        }}>
                                        <div class="groupW100">
                                            <input type="email" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Email</label>
                                        </div>
                                        <div class="groupW100">
                                            <input type="password" required />
                                            <span class="highlightW100"></span>
                                            <span class="barW100"></span>
                                            <label>Password</label>
                                        </div>
                                        <span className='ssapd'>
                                            <input type="submit" value="Log In" className='blueButton' />
                                        </span>
                                    </form>
                                    <button className='LoginAlready' onClick={SignOpen}>Don't have an account? <p onClick={SignOpen}>Sign in</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    )
}