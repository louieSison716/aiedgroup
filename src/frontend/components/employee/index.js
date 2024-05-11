/**
 * Author: Louie Sison
 * 
 * Employee
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import Avatar from '../../images/avatar.png'
import JuanDelaCruz from '../../images/juan-dela-cruz.png'
import EmployeeImg2 from '../../images/employee-img-2.png'
import EmployeeImg3 from '../../images/employee-img-3.png'
import EmployeeImg4 from '../../images/employee-img-4.png'
import EmployeeImg5 from '../../images/employee-img-5.png'
import EmployeeImg6 from '../../images/employee-img-6.png'
import EmployeeImg7 from '../../images/employee-img-7.png'
import EmployeeFbIcon from '../../images/employee-fb-icon.png'
import EmployeeLinkdinIcon from '../../images/employee-linkdin-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Employee = (props) => {

  const [EmployeeItems, setEmployeeItems] = useState([
    {
      name: 'Juan Dela Cruz',
      img: JuanDelaCruz,
      position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg2,
        position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg3,
        position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg4,
        position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg5,
        position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg6,
        position: 'Designer'
    },
    {
        name: 'Juan Dela Cruz',
        img: EmployeeImg7,
        position: 'Designer'
    }
  ])

  const renderEmployee = () => {
    return EmployeeItems.map((item)=> {
      return (
        <>
            <div className='employee-section__item'>
              <div>
                <div className='employee-section__img'>
                    <img src={item.img} alt="employee-avatar-img"/>
                </div>
                <div className='employee-section-info'>
                    <div className='employee-section-info__text'>
                        <p className='employee-section__name'>
                            {item.name}
                        </p>
                        <p className='employee-section__position'>
                            {item.position}
                        </p>
                    </div>
                    <div className='employee-section-info__social-media'>
                        <a href='/'>
                          <img src={EmployeeFbIcon} alt="employee-social-media"/>
                        </a>
                        <a href='/'>
                        <img src={EmployeeLinkdinIcon} alt="employee-social-media"/>
                        </a>
                    </div>
                </div>
              </div>
            </div>
        </>
      )
   })
  }

  return (
    <>
        <div className='employee-section container-cmn container-width-cmn'>
          <div className='employee-section__header'>
            <h2>Who We Are</h2>
          </div>
          <div className='employee-section_pillars'>
            {renderEmployee()}
          </div>
        </div>
    </>
    
  )
}

Employee.propTypes = {

}

Employee.defaultProps = {
  
}

export default Employee
