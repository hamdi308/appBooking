import React from 'react'
import './index.css';
const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navContainer'>
              <span className='logo'>T-Booking</span>
              <div className='navItems'>
                  <button className='navButton'>Registre</button>
                  <button className='navButton'>Login</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar