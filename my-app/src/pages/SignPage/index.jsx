import LoginPage from '../LoginPage'
import Logoimg from '../../images/Logo.png'

import './style.css'
import BackImg from '../../images/BackImg.png'

export function SignPage() {
    const SignOpen = (e) =>{
        window.location.pathname = `/sign`
    }
    return(
        <div className="Sign">
        <img className='LoginImgB' src={BackImg} />
        <div className="SignPage">
            <div className="">
                        <div className="LoginPagedfDiv">
                            <div className="LoginPageLeftdiv">
                                <div className="LoginPagePath">
                                    <a href='/' className='fa-solid fa-caret-left'></a>
                                </div>
                                <div className="LeftLogo">
                                    <img src={Logoimg} alt="" />
                                </div>
                                <div className="LeftText">
                                    <h2>Welcome back</h2>
                                    <p>Enter your account</p>
                                </div>
                                <div className="LEftInputs">
                                    <form action="/action_page.php">
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
                                            <input type="submit" value="Log In" className='blueButton' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`} />
                                        </span>
                                    </form>
                                    <button className='LoginAlready' onClick={SignOpen}>Already have an account? <p onClick={SignOpen}>Sign in</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    )
}