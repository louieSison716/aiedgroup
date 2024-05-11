/**
 * Author: Louie Sison
 * Page: Invest
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import AboutUsBanner from '../../images/about-us-banner.png'
import AboutUsLeftImg from '../../images/about-us-left-img.png'
import investVideoImg from '../../images/invest-video-image.png'
import Banner from '../../components/banner/desktop/index.js'
import MobileBanner from '../../components/banner/mobile/index.js'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import styles from './styles.scss'

const Invest = (props) => {

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
        <div className='invest'>
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
          <div className='content-two-col-right-img container-cmn container-width-cmn'>
            <div className='content-two-col-right-img__pillars'>
                <div className='content-two-col-right-img__left'>
                    <div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </p>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </p>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </p>
                    </div>
                    </div>
                        <div className='content-two-col-right-img__right'>
                        <div>
                        <img src={investVideoImg} className="App-logo" alt="logo" />
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
        </div>
        <Footer />
    </>
    
  )
}

Invest.propTypes = {

}

Invest.defaultProps = {

}

export default Invest
