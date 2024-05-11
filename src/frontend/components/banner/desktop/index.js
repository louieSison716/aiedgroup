/**
 * Author: Louie Sison
 * Page: Banner
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import HomeBanner from '../../../images/home-banner.png'
import styles from './styles.scss'

const Banner = (props) => {
  
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
        <div className="banner">
            <div className='banner-title'>
                {renderBannerItems()}
            </div>
            <img src={bannerLogo} className="App-logo" alt="logo" />
        </div>
    </>
    
  )
}

Banner.propTypes = {
    bannerItem: PropTypes.array,
    bannerLogo: PropTypes.string
}

Banner.defaultProps = {

}

export default Banner
