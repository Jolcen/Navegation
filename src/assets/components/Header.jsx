import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <a href="/home"><li>home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/dashboard"><li>Dasboard</li></a>
        <div className="line"></div>
    </div>
  )
}

export default Header