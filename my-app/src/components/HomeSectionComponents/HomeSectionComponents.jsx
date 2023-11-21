import React from 'react'
import img1 from '../../images/img1.png'
import "./style.css"
function HomeSectionComponents() {
    return (
      <div>
        <div className='HomeSectionComponents'>
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
export default HomeSectionComponents