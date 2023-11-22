import React from 'react'
import "./style.css"
function HomeSectionCard() {
  return (
    <div>
      <div className="dblog">
        <div className='container'>
          <div className="dfcardss">
            <div class="col">
              <a href="#" class="card card-3 stacked--up">
                <div class="content">
                  <code class="">
                    <div>
                      <div className='cardIcon'>
                        <i className='fa-solid fa-phone'></i>
                      </div>
                      <div className="cardText">
                        <h2>Phone calls</h2>
                        <p>I want to receive more phone calls from potential clients.</p>
                      </div>
                    </div>
                  </code>
                </div>
              </a>
            </div>
            <div class="col">
              <a href="#" class="card card-3 stacked--up">
                <div class="content">
                  <code class="">
                    <div>
                      <div className='cardIcon'>
                        <i className='fa-solid fa-location-arrow'></i>
                      </div>
                      <div className="cardText">
                        <h2>Website Traffic</h2>
                        <p>I want more people to visit my website.</p>
                      </div>
                    </div>
                  </code>
                </div>
              </a>
            </div>
            <div class="col">
              <a href="#" class="card card-3 stacked--up">
                <div class="content">
                  <code class="">
                    <div>
                      <div className='cardIcon'>
                        <i className='fa-solid fa-shop'></i>
                      </div>
                      <div className="cardText">
                        <h2>Offline Visitors</h2>
                        <p>I want more people to visit my physical store.</p>
                      </div>
                    </div>
                  </code>
                </div>
              </a>
            </div>
            <div class="col">
              <a href="#" class="card card-3 stacked--up">
                <div class="content">
                  <code class="">
                    <div>
                      <div className='cardIcon'>
                        <i className='fa-solid fa-filter'></i>
                      </div>
                      <div className="cardText">
                        <h2>Online Leads</h2>
                        <p>I want more people to sign up for my offers.</p>
                      </div>
                    </div>
                  </code>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeSectionCard