import './style.css'

export function SendedComponent() {
    return(
        <div className="SendedComp">
            <i className='fa-solid fa-check'></i>
            <h2>Thank You!</h2>
            <p>We've send the link to your telegram account. Please wait our response.</p>
            <a href="/">Back Home</a>
        </div>
    )
}
