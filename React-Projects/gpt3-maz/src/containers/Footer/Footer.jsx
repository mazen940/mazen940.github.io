import React from 'react'
import './Footer.css'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do You Want to Syep in to the Future before Others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo"  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, totam?</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Lorem, ipsum dolor.</p>
          <p>000-555-888</p>
          <p>imfo@mail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p> & 2024 GPT-3 ALl right reserved</p>
      </div>
    </div>
  )
}

export default Footer