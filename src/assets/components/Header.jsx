import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <a href="/home">home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dasboard</a>
        <div className="line"></div>
    </div>
  )
}

export default Header