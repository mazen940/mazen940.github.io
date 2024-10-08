import React from 'react'
import './Menu.css'
import images from '../../constants/images'
import data from '../../constants/data'
import { SubHeading, Menuitem } from '../../components'


function Menu() {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title="Menu that fits Your Platte" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__menu-menu'>
        <div className='app__menu-menu-wine flex__center'>
          <p className='app__menu-menu_heading'> Wine & beer</p>
          <div className='app__menu-menu_items'>
              {data.wines.map((wine, index)=>(
                // <p>{wine.title}</p>
                <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))}
          </div>
        </div>
        <div className='app__menu-menu_img'>
          <img src={images.menu} alt="menu image"  />
        </div>
        <div className='app__menu-menu-cocktails flex__center'>
          <p className='app__menu-menu_heading'> Cocktails</p>
          <div className='app__menu-menu_items'>
              {data.cocktails.map((cocktail, index)=>(
                // <p>{cocktail.title}</p>
                <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
          </div>
        </div>

      </div>
      <div style={{marginTop: '15px'}}>
              <button type="button" className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default Menu