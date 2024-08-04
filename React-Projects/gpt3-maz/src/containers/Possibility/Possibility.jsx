import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-img'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibility are Beyond Your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit assumenda, ut cupiditate eaque quaerat eum suscipit veniam perferendis impedit.</p>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
      </div>
    </div>
  )
}

export default Possibility