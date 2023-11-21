import './style.css'
function LoginPage() {
  return (
    <div className="LoginPage">
            <button onClick={(e) => window.location.pathname = `/${e.target.id}`}>
        <div className="LoginPagePath">
            <i className='fa-solid fa-caret-left'></i>
        </div>
        </button>
        <div className="LoginPageBox">
            <img src="https://shown.io/static/images/logo.svg" alt="" />
            <h1>Create your account</h1>
            <p>Quickly sign up with your ads account.</p>
            <form action="">
                <div className="signBoxes">
                    <h3>Email</h3>
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="signInside">
                    <div className="signBoxes">
                        <h3>First Name</h3>
                        <input className='LoginAddInput' type="text" placeholder='Enter your name' />
                    </div><div className="signBoxes">
                        <h3>Last Name</h3>
                        <input className='LoginAddInput' type="text" placeholder='Enter your surname' />
                    </div>
                </div>
                <div className="signBoxes">
                    <h3>Password</h3>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="signBoxes">
                    <h3>Re-type your password</h3>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="LoginBoxess">
                    <input type="checkbox"  className='Logincheck'/>
                    <h2>I accept the Terms and Privacy</h2>
                </div>
                <button>Get Started</button>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;