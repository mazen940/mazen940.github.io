import React from 'react'
import './Header.css'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
              <h1 className='gradient__text'>
              let's build something amazing with GPT-3 openAI 
              </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cupiditate suscipit dolorum vitae perspiciatis cum quae voluptatem. Est in unde error ipsum eveniet exercitationem, itaque nostrum veritatis explicabo neque at earum amet reprehenderit non dolor facilis. Vitae quasi sapiente inventore eius, eos odit ratione? Sit debitis ea sunt dicta excepturi.
              </p>
              <div className='gpt3__header-content__input'>
                <input type='email' placeholder='your email address'/>
                <button type='button'>Get Started</button>
              </div>
              <div className='gpt3__header-content__people'>
                  <img src={people} alt='people'></img>
                  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem eos eligendi eius. Velit, placeat!
                  </p>
              </div>
            </div>
            <div className='gpt3__header-img'>
              <img src={ai} alt='ai' />
            </div>
        
    </div>
  )
}

export default Header