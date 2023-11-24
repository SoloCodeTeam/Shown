import './style.css'
import img6 from '../../images/img6.png'
import { useNavigate } from 'react-router-dom'
export function NotFound() {
    const navlink = useNavigate()
    return(
        <div className="NotFound">
        <div className="LoginPagePath">
            <a onClick={() => navlink("/")} className='fa-solid fa-caret-left'></a>
        </div>
            <img src={img6} alt="" />
        </div>
    )
}