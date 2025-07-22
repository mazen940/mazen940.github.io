import React from 'react'
import './Header.css'
import images from '../../constants/images'
import { SubHeading } from '../../components'

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app_wrapper-info'>
        <SubHeading title="Chase The new Flavour"/>
        <h1 className='app__header-h1'>The key to fine Dinning</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequatur repellat obcaecati praesentium temporibus in?</p>
        <button type="button" className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__header-img'>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header