/**
 * Author: Louie Sison
 * Page: Services
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import styles from './styles.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useFetch from '../../../hooks/useFetch.js';

const Services = (props) => {
    const services = useFetch('http://localhost:1337/api/services')
    const servicesPage = useFetch('http://localhost:1337/api/service-page')

    useEffect(()=>{
        //if needed
    },[services, servicesPage])

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
        <div className='services'>
            <h2 className='page-header'>
                {
                    servicesPage.data &&
                    servicesPage.data.data.attributes.header
                }
            </h2>
            <div className='services-content container-cmn container-width-cmn'>
                <div className='services-content-pillar'>
                    {
                        services.data &&
                        services.data.data.map(service => (
                            <div 
                                key={service.id} 
                                className='services-content-pillar__item'>
                                 <h2>{service.attributes.Title}</h2>
                                 <p>{service.attributes.Description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

Services.propTypes = {

}

Services.defaultProps = {

}

export default Services
