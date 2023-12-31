import "./style.css"
import img3 from '../../images/img3.png'
import { useNavigate } from "react-router-dom"

export function WaitComponent() {
    const navlink = useNavigate()
    return (
        <div className="Wait">
            <div className="container">
                <div className="WaitTexts">
                    <h1>What are you waiting for?</h1>
                    <p>Think of Shown as your automated marketing department, an AI that optimises ads for you, and around-the-clock support. Start under 5 minutes with our smart advertising platform.</p>
                    <a href="#" onClick={() => navlink("/sign")}>Create a account</a>
                </div>
                <div>
                <img src={img3} alt="simpleimg" />
                </div>
            </div>
        </div>
    )
}