import React from 'react'
import './Blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './import'
const Blog = () => {
  return (
    <div className='gpt3__blo section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is Happening We are blogging about it </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='26-sep-2024' title='GPT3 and Open AI is the future . Let us explore how it is?'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='26-sep-2024' title='GPT3 and Open AI is the future . Let us explore how it is?'/>
          <Article imgUrl={blog03} date='26-sep-2024' title='GPT3 and Open AI is the future . Let us explore how it is?'/>
          <Article imgUrl={blog04} date='26-sep-2024' title='GPT3 and Open AI is the future . Let us explore how it is?'/>
          <Article imgUrl={blog05} date='26-sep-2024' title='GPT3 and Open AI is the future . Let us explore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog