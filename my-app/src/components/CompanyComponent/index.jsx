import "./style.css"

export function CompanyComponent() {
    return(
        <div>
        <div className="Company">
            <h1>You Are in Good Company</h1>
            <p>More than 20 000 businesses trust Shown with their marketing and peace of mind. See what they have to say about us:</p>
            <ul>
                <li>
                    <img src="https://shown.io/static/images/stars-aqua.svg" alt="stars" />
                    <p>I started using Shown for my business and I'm really satisfied. A special thank you to Yarkin from the support for helping me!</p>
                    <h3>Brenton Miller</h3>
                </li>
                <li>
                    <img src="https://shown.io/static/images/stars-aqua.svg" alt="stars" />
                    <p>Shown is like a digital marketing guru sitting near me and saving my time by doing all the manual work!</p>
                    <h3>Alexander Skibinskiy</h3>
                </li>
                <li>
                    <img src="https://shown.io/static/images/stars-aqua.svg" alt="stars" />
                    <p>I used Shown to advertise for my business. I had very good results and I am happy with their automated tool and support plan.</p>
                    <h3>Baptiste Michiels</h3>
                </li>
            </ul>
        </div>
        </div>
    )
}