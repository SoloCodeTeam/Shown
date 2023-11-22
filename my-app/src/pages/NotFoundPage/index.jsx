import './style.css'
import img6 from '../../images/img6.png'
export function NotFound() {
    return(
        <div className="NotFound">
        <div className="LoginPagePath">
            <a href='/' className='fa-solid fa-caret-left'></a>
        </div>
            <img src={img6} alt="" />
        </div>
    )
}