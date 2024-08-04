import React from 'react'
import './WhatGPT3.css'
import { Feature } from '../../components'  

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
          <Feature title="what is GPT-3" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nihil." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are Beyond Your Imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatpots" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nihil."/>
        <Feature title="Knowledgebase" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nihil." />
        <Feature title="Eductaion" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, nihil." />
      </div>
    </div>
  )
}

export default WhatGPT3