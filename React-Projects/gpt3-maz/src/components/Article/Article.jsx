import React from 'react'
import './Article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
        <img src={imgUrl} alt='blog img' />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Article</p>
      </div>
    </div>
  )
}

export default Article