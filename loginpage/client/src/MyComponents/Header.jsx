import React from 'react'
import logo from './HOME-removebg-preview.png'
import "./navbar.css"

export const Header = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo"/>
    </div>

  </nav>
  )
}
