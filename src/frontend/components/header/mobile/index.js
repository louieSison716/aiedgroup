/**
 * Author: Louie Sison
 */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from '../mobile/styles.scss'
import AEIDMenuIcon from '../../../images/menu-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const MobileHeader = (props) => {

  const [isShowMenu, setIsShowMenu] = useState(false)

  const [mobileMenuItems, setMobileMenuItems] = useState([
    {
      name: 'About',
      link: '/about',
      icon: '',
      isIcon: false
    },
    {
      name: 'Services',
      link: '/services',
      icon: '',
      isIcon: false
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
      icon: '',
      isIcon: false
    },
    {
      name: 'News',
      link: '/news',
      icon: '',
      isIcon: false
    },
    {
      name: 'Invest',
      link: '/invest',
      icon: '',
      isIcon: false
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: '',
      isIcon: false
    }
  ])

  const renderMobileMenu = () => {
    return mobileMenuItems.map((menu)=> {
      return (
        <>
          {
            menu.isIcon === false &&
            <div className='header-menu__item'>
              <a href={menu.link}>
                {menu.name}
              </a>
            </div>
          }
        </>
      )
   })
  }

  const onShowMenu = (e) => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <>
        <div className='mobile-header-menu-holder'>
            <div className='navbar-mobile'>
                <div className='navbar-mobile__content'>
                    <div className='navbar-mobile__hamburger'>
                        {
                            !isShowMenu && 
                            <FontAwesomeIcon 
                                icon={faBars} 
                                className='fa-bars'
                                onClick={ onShowMenu }
                                />
                        }
                        {
                            isShowMenu && 
                            <FontAwesomeIcon 
                                icon={faX} 
                                className='fa-x'
                                onClick={ onShowMenu }
                                />
                        }
                    </div>
                    <div className='navbar-mobile__logo'>
                        <a href="/">
                          <img src={AEIDMenuIcon} className="header-menu-icon" alt="header-menu-icon" />
                        </a>
                    </div>
                </div>
            </div>
            {
                isShowMenu &&
                <>
                    <div className='mobile-header-menu-item-holder'>
                        {renderMobileMenu()}
                    </div>
                </>
            }
        </div>
    </>
    
  )
}

MobileHeader.propTypes = {

}

MobileHeader.defaultProps = {

}

export default MobileHeader
