import React from 'react'
import './Features.css'
import { Feature } from '../../components'

const featuresData =[
  {
    title: 'improving and distrusts instantly',
    text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa cum distinctio dolores eos dignissimos officiis, tempora ut voluptates quisquam?'
  },
  {
    title: 'Become the tended active',
    text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa cum distinctio dolores eos dignissimos officiis, tempora ut voluptates quisquam?'
  },
  {
    title: 'Message or em nothimg',
    text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa cum distinctio dolores eos dignissimos officiis, tempora ut voluptates quisquam?'
  },
  {
    title: 'Really boy low county',
    text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa cum distinctio dolores eos dignissimos officiis, tempora ut voluptates quisquam?'
  },

]

const Features = () => {
  return (
    <div className='gpt3__features .section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features