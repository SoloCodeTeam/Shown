import React from 'react'
import img1 from '../../images/img1.png'
import "./style.css"
function HomeSectionComponents() {
    return (
      <div>
        <div className='HomeSectionComponents'  id='4'>
        <div className="container">
          <div className="sectioncard sectioncardrow">
            <div className="sectionCardLeft">
              <img src={img1} alt="" />
            </div>
            <div className="sectionCardRight">
              <div className="sectionCardRight">
                <div className='sectionCardRightText'>
                  <div>
                    <h2>Google & Microsoft Ads</h2>
                  </div>
                  <div className='sectionCardRightTextdivp'>
                    <p>Appear on Google & Bing and run search ads like the biggest brands in a matter of minutes. Tired of spending hours on keywords? Let Shown AI generate all the perfect keywords for you!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    )
}
export default HomeSectionComponents