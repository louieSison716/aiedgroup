/**
 * Author: Louie Sison
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import Banner from '../../components/banner/desktop/index.js'
import MobileBanner from '../../components/banner/mobile/index.js'
import HomeBanner from '../../images/home-banner.png'
import kabiseraImg from '../../images/kabisera-img.png'
import laforetImg from '../../images/Laforet-img.png'
import latestNews1 from '../../images/latest-news-img-1.png'
import latestNews2 from '../../images/latest-news-img-2.png'
import latestNews3 from '../../images/latest-news-img-3.png'
import styles from './styles.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Home = (props) => {

  const [bannerItems, setBannerItems] = useState([
    {
        name: 'More Than',
        fontWeight: 'normal'
    },
    {
        name: 'Architecture',
        fontWeight: 'bold'
    }
  ])

  return (
    <>
        {
          isMobile ?
          <>
            <MobileHeader/>
            <MobileBanner 
              bannerItems={bannerItems}
              bannerLogo={HomeBanner}
            />
          </> :
          <>
            <Header/>
            <Banner
              bannerItems={bannerItems}
              bannerLogo={HomeBanner}
            />
          </>
        }
        <>
          <div className='content-one-col'>
              <div className='content-one-col__item'>
                <h2>ARCHITECTURE</h2>
                <h2>ENGINEERING</h2>
                <h2>INTERIOR DESIGN</h2>
                <h2><b>GROUP</b></h2>
              </div>
          </div>
          <div className='content-two-col container-cmn container-width-cmn'>
            <div className='content-two-col__item'>
              <h3 className='content-two-col__title'>Our Expertise</h3>
              <div className='content-two-col__desc'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries...
                </p>
              </div>
              <div className='content-two-col__btn'>
                <a href='/services-offered' className='light-btn'>Services Offered</a>
              </div>
            </div>
            <div className='content-two-col__item'>
              <h3 className='content-two-col__title'>Our Team</h3>
              <div className='content-two-col__desc'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries...
                </p>
              </div>
              <div className='content-two-col__btn'>
                <a href='/about-us' className='light-btn'>About Us</a>
              </div>
            </div>
          </div>
          <div className='content-two-col-img container-cmn container-width-cmn'>
              <h3 className='content-two-col-img__header'>Featured Projects</h3>
              <div className='content-two-col-img__pillars'>
                <div className='content-two-col-img__item'>
                  <div className='content-two-img-holder'>
                    <img src={kabiseraImg} className="App-logo" alt="logo" />
                    <div className='content-two-img-desc'>
                      <div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='content-two-col-img__title'>
                    KABISERA
                  </div>
                  <div className='content-two-col-img__btn'>
                    <a href='/' className='light-btn'>Read More</a>
                  </div>
                </div>
                <div className='content-two-col-img__item'>
                  <div className='content-two-img-holder'>
                    <img src={laforetImg} className="App-logo" alt="logo" />
                    <div className='content-two-img-desc'>
                      <div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries
                          </p>
                        </div>
                    </div>
                  </div>
                  <div className='content-two-col-img__title'>
                    LA FORET
                  </div>
                  <div className='content-two-col-img__btn'>
                  <a href='/' className='light-btn'>Read More</a>
                  </div>
                </div>
              </div>
          </div>
          <div className='content-three-col-img container-cmn container-width-cmn'>
                <h3 className='content-header'>
                  Latest News
                </h3>
                <div className='content-three-col-img__pillars'>
                  <div className='content-three-col-img__item'>
                    <div className='content-three-img-holder'>
                      <img src={latestNews1} className="latest-news-img" alt="latest-news-img" />
                    </div>
                  </div>
                  <div className='content-three-col-img__item'>
                    <div className='content-three-img-holder'>
                      <img src={latestNews2} className="latest-news-img" alt="latest-news-img" />
                    </div>
                  </div>
                  <div className='content-three-col-img__item'>
                    <div className='content-three-img-holder'>
                      <img src={latestNews3} className="latest-news-img" alt="latest-news-img" />
                    </div>
                  </div>
                </div>
          </div>
          <div className='content-two-col container-cmn container-width-cmn'>
              <div className='content-two-col__item'>
                <h3 className='content-two-col__title'>Invest In Us.</h3>
                <div className='content-two-col__desc'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries...
                  </p>
                </div>
                <div className='content-two-col__btn'>
                  <a href='/services-offered' className='light-btn'>Read More</a>
                </div>
              </div>
              <div className='content-two-col__item'>
                <h3 className='content-two-col__title'>Let's Talk.</h3>
                <div className='content-two-col__desc'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries...
                  </p>
                </div>
                <div className='content-two-col__btn'>
                  <a href='/about-us' className='light-btn'>Work With Us</a>
                </div>
              </div>
          </div>
          <Footer />
        </>
    </>
    
  )
}

Home.propTypes = {

}

Home.defaultProps = {

}

export default Home
