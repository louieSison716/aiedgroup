/**
 * Author: Louie Sison
 * Page: Mobile Banner
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import HomeBanner from '../../../images/home-banner.png'
import styles from './styles.scss'

const MobileBanner = (props) => {
  
  const { bannerItems, bannerLogo } = props

  const renderBannerItems = () => {
    return bannerItems.map((bannerItem)=> {
      return (
        <>
             <div className='banner-title__item'>
                {
                    bannerItem.fontWeight === 'bold' ? 
                    <b>
                        {bannerItem.name}
                    </b> : 
                    <>
                        {bannerItem.name}
                    </>
                }
             </div>
        </>
      )
   })
  }

  return (
    <>
        <div className="mobile-banner">
            <div className='banner-title'>
                {renderBannerItems()}
            </div>
            <img src={bannerLogo} className="App-logo" alt="logo" />
        </div>
    </>
    
  )
}

MobileBanner.propTypes = {
    bannerItem: PropTypes.array,
    bannerLogo: PropTypes.string
}

MobileBanner.defaultProps = {

}

export default MobileBanner
