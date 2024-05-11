/**
 * Author: Louie Sison
 * Page: Contact Us
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import GoogleMapReact from 'google-map-react';
import styles from './styles.scss'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = (props) => {

// const defaultProps = {
//         center: {
//             lat: 10.99835602,
//             lng: 77.01502627
//         },
//         zoom: 11
//     };

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
        <div className='contact-us container-cmn container-width-cmn'>
            <div className='contact-us-pillars'>
                <div className='contact-us-pillars__left'>
                    <div className='contact-us-info'>
                        <h3>General Enquiries</h3>
                        <a href="mailto:info@aeidgroup.com">info@aeidgroup.com</a>
                    </div>
                    <div className='contact-us-info'>
                        <h3>Business Opportunities</h3>
                        <a href="mailto:cmbd@aeidgroup.com">cmbd@aeidgroup.com</a>
                    </div>
                    <div className='contact-us-info'>
                        <h3>Career Opportunities</h3>
                        <a href="mailto:cmbd@aeidgroup.com">careers@aeidgroup.com</a>
                    </div>
                    <div className='contact-us-info'>
                        <h3>Postal Address</h3>
                        <p>Address</p>
                    </div>
                </div>
                <div className='contact-us-pillars__right'>
                    <div className='contact-us-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124340.94149176267!2d123.69077326327725!3d13.121065337116914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a101687e9bf8a7%3A0x305252e78d14537a!2sLegazpi%20City%2C%20Albay%2C%20Philippines!5e0!3m2!1sen!2snz!4v1691826367253!5m2!1sen!2snz" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact-us-pillars-right-info'>
                        <div className='contact-us-info'>
                            <h3>Bicol Branch (Main)</h3>
                            <p>Address</p>
                        </div>
                        <div className='contact-us-info'>
                            <h3>Dubai Branch</h3>
                            <p>Address</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

ContactUs.propTypes = {

}

ContactUs.defaultProps = {

}

export default ContactUs
