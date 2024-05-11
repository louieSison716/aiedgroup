/**
 * Author: Louie Sison
 * Page: About us
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import AboutUsBanner from '../../images/about-us-banner.png'
import AboutUsLeftImg from '../../images/about-us-left-img.png'
import styles from './styles.scss'
import Employee from '../../components/employee/index.js'
import Banner from '../../components/banner/desktop/index.js'
import MobileBanner from '../../components/banner/mobile/index.js'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const About = (props) => {

  const [bannerItems, setBannerItems] = useState([
    {
        name: 'ARCHITECTURE',
        fontWeight: 'normal'
    },
    {
        name: 'ENGINEERING',
        fontWeight: 'normal'
    },
    {
      name: 'INTERIOR DESIGN',
      fontWeight: 'normal'
    },
    {
      name: 'GROUP',
      fontWeight: 'bold'
    }
  ])

  return (
    <>
        {
          isMobile ?
          <>
            <MobileHeader/>
          </>
          :
          <>
            <Header />
          </>
        }
        <div className='about-us'>
           {
            isMobile ?
            <>
              <MobileBanner 
                bannerItems={bannerItems}
                bannerLogo={AboutUsBanner}
              />
            </> :
            <>
              <Banner
                bannerItems={bannerItems}
                bannerLogo={AboutUsBanner}
              />
            </>
          }
          <div className='content-two-col-left-img container-cmn container-width-cmn'>
            <div className='content-two-col-left-img__pillars'>
              <div className='content-two-col-left-img__left'>
                <img src={AboutUsLeftImg} className="App-logo" alt="logo" />
              </div>
              <div className='content-two-col-left-img__right'>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  </p>
                  <h2>We are always looking for talent</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  </p>
                  <div className='content-center-btn'>
                    <a href="/" className="light-btn">Work With Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Employee />
        </div>
        <Footer />
    </>
    
  )
}

About.propTypes = {

}

About.defaultProps = {

}

export default About
