import React from 'react'
import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiInstagram, FiTwitter }
  from 'react-icons/fi'
import images from '../../constants/images'



const Footer = () => (

  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">16 street - Sana'a - Yemen </p>
        <p className="p__opensans">+967 777 - 7777 -777</p>
        <p className="p__opensans">777 777 777</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="image" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, suscipit?
        </p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer-links_work">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Mon - Fri  </p>
          <p className="p__opensans">08:00 am - 05:00 pm</p>
          <p className="p__opensans">Sat - Sun  </p>
          <p className="p__opensans">08:00 am - 01:00 pm</p>
        </div>
      </div>
    </div>
    <div className="app__footer__copyright">
      <p className="p__opensans">
        2024
      </p>
    </div>
  </div>
)

export default Footer

