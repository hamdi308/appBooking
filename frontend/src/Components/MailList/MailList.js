import React from 'react';
import './index.css';

const MailList = () => {
  return (
      <div className='mail'>
          <h1 className='mailTitle'>save Both of Money and Time</h1>
          <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
          <div className='mailInputContainer'>
              <input type="text" placeholder='Your Email' />
              <button>Subscribe</button>
          </div>
    </div>
  )
}

export default MailList