import React from 'react'
import img2 from '../../images/img2.png'
import "./style.css"
function HomeSectionComponentsTwo() {
  return (
    <div>
    <div className='HomeSectionComponentsTwo'>
        <div className="container">
          <div className="sectioncard">
            <div className="sectionCardLeft">
              <img src={img2} alt="" />
            </div>
            <div className="sectionCardRight">
              <div className="sectionCardRight">
                <div className='sectionCardRightText'>
                  <div>
                    <h2>Facebook & Instagram Ads</h2>
                  </div>
                  <div className='sectionCardRightTextdivp'>
                    <p>Connect with more than 2 billion people. Publish your appealing image or video ads among an engaged audience and reach your advertising goals.</p>
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
export default HomeSectionComponentsTwo