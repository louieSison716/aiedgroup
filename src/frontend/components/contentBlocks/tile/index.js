/**
 * Author: Louie Sison
 * Tiles Component
 */

import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import Laforet2Img from '../../../images/laforet-2-img.png'
import Kabisera2img from '../../../images/kabisera-2-img.png'

const Tile = (props) => {
  
  const { id, header, title, description, btnTitle, btnLink, btnType, imageRight, imageUrl } = props

  useEffect(()=>{
  },[])

  return (
    <>
        {
            imageRight && 
            <>
                <div className='content-two-col-right-img container-cmn container-width-cmn'>
                    <div className='content-two-col-right-img__pillars'>
                        <div className='content-two-col-right-img__left'>
                            <div>
                                <h2>{title}</h2>
                                <p>
                                    {description}
                                </p>
                                <div class="content-center-btn"><a href={`portfolios/${id}/?populate=*`} class="light-btn">{btnTitle}</a></div>
                            </div>
                        </div>
                        <div className='content-two-col-right-img__right'>
                            <div>
                                <img src={imageUrl} className="App-logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
        {
            imageRight === false &&
            <div className='content-two-col-left-img container-cmn container-width-cmn'>
                <div className='content-two-col-left-img__pillars'>
                    <div className='content-two-col-left-img__left'>
                        <div>
                            <img src={Laforet2Img} className="App-logo" alt="logo" />
                        </div>
                    </div>
                    <div className='content-two-col-left-img__right'>
                        <div>
                            <h2>{title}</h2>
                            <p>
                                {description}
                            </p>
                            <div class="content-center-btn"><a href={`portfolios/${id}/?populate=*`} class="light-btn">{btnTitle}</a></div>
                        </div>
                    </div>
                </div>
          </div>
        }

    </>
  )
}

Tile.propTypes = {
    id: PropTypes.number,
    header: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnTitle: PropTypes.string,
    btnLink: PropTypes.string,
    btnType : PropTypes.string,
    imageRight: PropTypes.bool,
    imageUrl: PropTypes.string
}

Tile.defaultProps = {
    imageRight: true,
}

export default Tile
