import React from 'react'
import "./style.css"
function HomeHeaderComponent() {
  return (

    <div>
      <>
        <div className="HomeHeaderComponent">
          <div className="container">
            <div className="homecard homecardrow">
              <div className="homeCardLeft">
                <img src=" https://media.istockphoto.com/id/1471395233/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D0%B9%D1%82-%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-%D0%B8-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=V76z5uDweY3Z6X5BtoGXrxnX1aAwraFphg9PMop-Hxg=" alt="" />
              </div>
              <div className="homeCardRight">
                <div className="homeCardRight">
                  <div className='homeCardRightText'>
                    <div className='homeCardRightTextdivh2'>
                      <h2>One platform to manage all your advertising</h2>
                    </div>
                    <div className='homeCardRightTextdivp'>
                      <p>Create, manage and collaborate on your ads. Publish them across all major advertising channels and benefit from intelligent automation guided by experts.</p>
                    </div>
                  </div>
                  <div className="homeCardButton">
                    <a href='#' className='blueButton'>Create a free account</a>
                    <br />
                    <p>1358 companies signed up in the last week alone!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="homeheadersection">
              <img src="https://shown.io/static/images/app-screenshot.png" alt="" />
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default HomeHeaderComponent

