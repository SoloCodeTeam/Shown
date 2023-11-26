import React from 'react'
// import img5 from '../../images/img5.png'
import img4 from '../../images/img4.png'
import { useNavigate } from 'react-router-dom'
import "./style.css"
function HomeHeaderComponent() {
  const navlink = useNavigate()
  return (
    <div>
      <>
        <div className="HomeHeaderComponent">
          <div className="container">
            <div className="homecard homecardrow">
              <div className="homeCardLeft">
                <img src={img4} alt="" />
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
                    <a onClick={() => {navlink("/sign")}} className='blueButton'>Create a free account</a>
                    <br />
                    <p>1358 companies signed up in the last week alone!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="homeheadersection">
              {/* <img src={img5} alt="" /> */}
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default HomeHeaderComponent

