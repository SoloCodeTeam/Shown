import "./style.css"

export function FooterComponent() {
     return(
        <>
        <div className="Footer">
            <ul>
                <li>
                    <a href="#">Privacy & Cookies</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Support Center</a>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <a href="#">Product Roadmap</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Partner Program</a>
                    <a href="#">Press & Media</a>
                </li>
                <li>
                    <a href="#">Google Ads</a>
                    <a href="#">Facebook Ads</a>
                    <a href="#">Instagram Ads</a>
                    <a href="#">Microsoft Ads</a>
                </li>
                <li>
                    <img src="https://shown.io/static/images/partners/google-partner.png" alt="GooglePartner" />
                </li>
            </ul>
            <hr />
            <div className="underBox">
                <p>© 2023, Shown. All rights reserved.</p>
                <span>
                    <a href="https://facebook.com" className="fa-brands fa-facebook"></a>
                    <a href="https://twitter.com" className="fa-brands fa-twitter"></a>
                    <a href="https://linkedin.com" className="fa-brands fa-linkedin"></a>
                    <a href="https://instagram.com" className="fa-brands fa-instagram"></a>
                </span>
            </div>
        </div>
        </>
     )
}