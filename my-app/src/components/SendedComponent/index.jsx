import './style.css'
import { useNavigate } from 'react-router-dom'

export function SendedComponent() {
    const navlink = useNavigate()
    return(
        <div className="SendedComp">
            <i className='fa-solid fa-check'></i>
            <h2>Thank You!</h2>
            <p>We've send the link to your telegram account. Please wait our response.</p>
            <a onClick={() => navlink("/")}>Back Home</a>
        </div>
    )
}
