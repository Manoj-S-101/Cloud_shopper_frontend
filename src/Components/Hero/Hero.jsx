import React from 'react'
import './Hero.css'
import hand_icon from '../../Assets/hand_icon.png'
import hero_img from '../../Assets/hero_image.png'
import arrow_icon from '../../Assets/arrow.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="left-part">
        <p>NEW ARRIVALS ONLY</p>
        <div className="intro">
            <span>new</span>
            <img src={hand_icon} alt="" /><br/>
            <span>Collections</span><br/>
            <span>for Everyone</span>
        </div>
        <a href='#new-collections'><button>Latest Collection <img src={arrow_icon} alt="" /></button></a>
    </div>
    <div className="right-part">
        <img src={hero_img} alt="" />
    </div> 
    </div>
  )
}

export default Hero
