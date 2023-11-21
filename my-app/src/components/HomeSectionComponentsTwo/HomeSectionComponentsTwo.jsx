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
                    <h2>Google & Microsoft Ads</h2>
                  </div>
                  <div className='sectionCardRightTextdivp'>
                    <p>Появляйтесь в Google & Bing и запускайте поисковые объявления, например, крупнейшие бренды, в считанные минуты. Надоело тратить часы на ключевые слова? Пусть Shown AI сгенерирует все идеальные ключевые слова для вас!</p>
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