import React from 'react'
import headphoneImage from "../../Assets/headphone.png"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero">
    <div className="hero_left">
      <h3>100 Thousand Songs, ad-free</h3>
      <h3>Over thousands podcast episodes</h3>
    </div>
    <div className="hero_right">
      <img src={headphoneImage} height="250px" width="250px" alt="headphoneImage" />
    </div>
  </div>
  )
}

export default HeroSection