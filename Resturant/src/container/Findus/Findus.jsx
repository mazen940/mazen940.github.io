import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'


function Findus() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title="contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, fugiat.
          </p>
          <p className="p__cormorant" style={{ color: '#dcca87', margin: '2rem 0' }}>
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Friday: 10:00am - 02:00PM </p>
          <p className="p__opensans">Sat - Sun: 05:00am - 10:00PM</p>
        </div>
        <button type="button" className='custom__button'>
          View Us
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}

export default Findus