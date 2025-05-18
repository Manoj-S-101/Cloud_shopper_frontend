import React from 'react'
import './Offers.css'
import exclusive_img from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left-part">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <a href="#new-collections"><button className='offers-check'>Check Now</button></a>
      </div>
      <div className="offers-right-part">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offers
