/**
 * Author: Louie Sison
 * Page: Portfolio
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import VideoImg from '../../../frontend/images/video-img.png'
import investVideoImg from '../../images/invest-video-image.png'
import Laforet2Img from '../../images/laforet-2-img.png'
import Kabisera2img from '../../images/kabisera-2-img.png'
import styles from './styles.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Portfolio = (props) => {

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
        <div className='portfolio'>
            <div className='content-two-col-right-img container-cmn container-width-cmn'>
                <div className='content-two-col-right-img__pillars'>
                    <div className='content-two-col-right-img__left'>
                        <div>
                            <h2>The City Nature Vibe of Kabisera TEST UPDATE</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...
                            </p>
                            <div class="content-center-btn"><a href="/portfolio/kabisera" class="light-btn">Read More</a></div>
                        </div>
                    </div>
                    <div className='content-two-col-right-img__right'>
                        <div>
                            <img src={Kabisera2img} className="App-logo" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-two-col-left-img container-cmn container-width-cmn'>
                <div className='content-two-col-left-img__pillars'>
                    <div className='content-two-col-left-img__left'>
                        <div>
                            <img src={Laforet2Img} className="App-logo" alt="logo" />
                        </div>
                    </div>
                    <div className='content-two-col-left-img__right'>
                        <div>
                            <h2>The Game Changer of La Foret</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...
                            </p>
                            <div class="content-center-btn"><a href="/portfolio/laforet" class="light-btn">Read More</a></div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <Footer />
    </>
    
  )
}

Portfolio.propTypes = {

}

Portfolio.defaultProps = {

}

export default Portfolio
