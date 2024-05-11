/**
 * Author: Louie Sison
 * Page: News
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import latestNewsImg1 from '../../images/latest-news-img-1.png'
import latestNewsImg2 from '../../images/latest-news-img-2.png'
import latestNewsImg3 from '../../images/latest-news-img-3.png'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import styles from './styles.scss'

const News = (props) => {

  return (
    <>
         {
          isMobile ?
          <>
            <MobileHeader/>
          </> :
          <>
            <Header/>
          </>
        }
        <div className='news'>
            <div className='news-content container-cmn container-width-cmn'>
                <div className='news-content-pillar'>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg1} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg2} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg3} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg1} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg2} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg3} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg1} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg2} className="news-img" alt="news-img" />
                        </div>
                    </div>
                    <div className='news-content-pillar__item'>
                        <div className='new-content-img-holder'>
                            <img src={latestNewsImg3} className="news-img" alt="news-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

News.propTypes = {

}

News.defaultProps = {

}

export default News
