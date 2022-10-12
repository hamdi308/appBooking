import React from 'react'
import './index.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='navbar'>
      <div className='navContainer'>
        <Link to='/'><span className='logo'>T-Booking</span></Link>
              <div className='navItems'>
                  <button className='navButton'>Registre</button>
                  <button className='navButton'>Login</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar