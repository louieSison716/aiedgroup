/**
 * Author: Louie Sison
 * Page: Portfolio
 */
import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/desktop/index.js'
import MobileHeader from '../../components/header/mobile/index.js'
import Footer from '../../components/footer/index.js'
import Laforet2Img from '../../images/laforet-2-img.png'
import Kabisera2img from '../../images/kabisera-2-img.png'
import styles from './styles.scss'
import { isMobile } from 'react-device-detect';
import useFetch from '../../../hooks/useFetch.js';
import Tile from '../../components/contentBlocks/tile/index.js'

const Portfolio = (props) => {

    const { apiUrl } = props
  
    const Portfolios = useFetch(`${apiUrl}portfolios?populate=FeatureBlock.featuredImage`)
   
    const renderPortfolio = () => {
        return Portfolios.data.data.map((item)=> {
          return (
            <>
                 <Tile
                    id={item.id}
                    title={item.attributes.FeatureBlock.title}
                    description={item.attributes.FeatureBlock.description}
                    btnTitle={item.attributes.FeatureBlock.btnTitle}
                    imageUrl={`http://localhost:1337${item.attributes.FeatureBlock.featuredImage.data.attributes.url}`}
                    imageRight={item.attributes.FeatureBlock.imageRight}
                />
            </>
          )
       })
    }

    useEffect(()=>{
      
    },[Portfolios])

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
            {
                Portfolios.data &&
                renderPortfolio()
            }            
        </div>
        <Footer />
    </>
    
  )
}

Portfolio.propTypes = {
    apiUrl: PropTypes.string
}

Portfolio.defaultProps = {
    apiUrl: ''
}

export default Portfolio
