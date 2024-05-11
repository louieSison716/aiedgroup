/**
 * Author: Louie Sison
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import FooterImg from '../../images/footer-img.png'
import FbIcon from '../../images/fb-icon.png'
import InstaIcon from '../../images/insta-icon.png'
import LinkdinIcon from '../../images/linkdin-icon.png'
import PhoneIcon from '../../images/phone-icon.png'

const Footer = (props) => {

  return (
    <>
        <div className="footer">
          <div className='footer-img-section'>
            <div className='footer-img-holder'>
              <img src={FooterImg} className='footer-img' alt='Footer Img' />
            </div>
          </div>
          <div className="footer-menu">
            <div className='footer-menu__item'>
              <a href='/about'>ABOUT</a>
            </div>
            <div className='footer-menu__item'>
              <a href='/services'>SERVICES</a>
            </div>
            <div className='footer-menu__item'>
              <a href='/portfolio'>PORTFOLIO</a>
            </div>
            <div className='footer-menu__item'>
              <a href='/invest'>INVEST</a>
            </div>
            <div className='footer-menu__item'>
              <a href='/contact'>CONTACT</a>
            </div>
          </div>
          <div className='footer-social-icon'>
            <div className='footer-social-icon__pillars'>
              <div className='footer-social-icon__item'>
                <a href='/'>
                  <img src={FbIcon} className='footer-social-icon-img' alt='Footer Social Icon Img' />
                </a>
              </div>
              <div className='footer-social-icon__item'>
                <a href='/'>
                  <img src={InstaIcon} className='footer-social-icon-img' alt='Footer Social Icon Img' />
                </a>
              </div>
              <div className='footer-social-icon__item'>
                <a href='/'>
                  <img src={LinkdinIcon} className='footer-social-icon-img' alt='Footer Social Icon Img' />
                </a>
              </div>
              <div className='footer-social-icon__item'>
                <a href='/'>
                  <img src={PhoneIcon} className='footer-social-icon-img' alt='Footer Social Icon Img' />
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
    
  )
}

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer
