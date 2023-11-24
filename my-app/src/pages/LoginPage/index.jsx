import './style.css'
import Logoimg from '../../images/Logo.png'

function LoginPage() {

    return (
        <>
            <>
                <div className="LoginPage">
                    <div className="container">
                        <div className="LoginPagedfDiv">
                            <div className="LoginPageLeftdiv">
                                <div className="LoginPagePath">
                                    <a href='/' className='fa-solid fa-xmark'></a>
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
                                        <div className="fnamedivs">
                                            <div class="groupW100">
                                                <input type="password" required />
                                                <span class="highlightW100"></span>
                                                <span class="barW100"></span>
                                                <label>Password</label>
                                            </div>
                                            <div class="groupW100">
                                                <input type="password" required />
                                                <span class="highlightW100"></span>
                                                <span class="barW100"></span>
                                                <label>Coniform Password</label>
                                            </div>
                                        </div>
                                        <span>
                                            <div class="groupW100">
                                                <input type="password" required />
                                                <span class="highlightW100 " ></span>
                                                <span class="barW100 "></span>
                                                <label className=''>Referal</label>
                                            </div>
                                        </span>
                                        <div className='checkboxbody'>
                                            <input id="c1" type="checkbox" />
                                            <label for="c1">I accept terms and privacy</label>
                                        </div>
                                        <span className='ssapd'>
                                            <input type="submit" value="Log In" className='blueButton ssapdButton' onClick={(e) => window.location.pathname = `/Client/${e.target.id}`} />
                                        </span>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="LoginPageRightDiv">
                                <span>
                                    <h2>
                                        Join over 20,000+ brands, marketers and business owners.
                                    </h2>
                                    <h3>
                                        Shown is like a digital marketing guru sitting near me and saving my time by doing all the manual work!
                                    </h3>
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default LoginPage;