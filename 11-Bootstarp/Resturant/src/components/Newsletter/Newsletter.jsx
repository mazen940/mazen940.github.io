import React from 'react'
import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'

function Newsletter() {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">
          Subscribe To our Newsletter
        </h1>
        <p className="p__opensans">And Never Miss Latest Updates</p>
      </div>
      <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='enter you Email' />
      <button type="button"className='custom__button'>Subscribe</button></div>
      
    </div>
  )
}

export default Newsletter