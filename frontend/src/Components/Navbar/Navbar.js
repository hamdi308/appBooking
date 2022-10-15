import React, { useContext } from 'react'
import './index.css';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
    const { user } = useContext(AuthContext);

  return (
      <div className='navbar'>
      <div className='navContainer'>
        <Link to='/'><span className='logo'>T-Booking</span></Link>
             {user ? user.username : ( <div className='navItems'>
                  <button className='navButton'>Registre</button>
                  <button className='navButton'>Login</button>
              </div>)}
          </div>
    </div>
  )
}

export default Navbar