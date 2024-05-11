/**
 * Author: Louie Sison
 */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from '../desktop/styles.scss'
import AEIDMenuIcon from '../../../images/menu-icon.png'

const Header = (props) => {

  const [menuItems, setMenuItems] = useState([
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
      name: 'AEID Icon',
      link: '/',
      icon: AEIDMenuIcon,
      isIcon: true
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

  const renderMenu = () => {
    return menuItems.map((menu)=> {
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
          {
            menu.isIcon === true &&
            <div className='header-menu__item'>
              <div className='header-menu-icon-holder'>
                <a href={menu.link}>
                  <img src={menu.icon} className="header-menu-icon" alt="header-menu-icon" />
                </a>
              </div>
            </div>
          }
        </>
        
        
      )
   })
  }

  return (
    <> 
        <div className='header-menu-holder'>
          <div className='header-menu'>
            {renderMenu()}
          </div>
        </div>
    </>
    
  )
}

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header
