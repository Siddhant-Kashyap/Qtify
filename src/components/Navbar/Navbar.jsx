import React from 'react'
import "./Navbar.css"
import Logo from "../../Assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#logo">< img src ={Logo} alt='Logo'/></a>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

      <button className="rounded-button">Give Feedback</button>
    </nav>
  )
}

export default Navbar