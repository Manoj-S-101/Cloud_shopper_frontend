import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
const Breadcrums = ({category , name}) => {
    let categ
    if(category === 'men')
        categ = "MEN"
    else if(category === 'women')
        categ = 'WOMEN'
    else
        categ = 'KIDS'
  return (
    <div className='breadcrums'>
       
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {categ} <img src={arrow_icon} alt="" /> {name}
    </div>
  )
}

export default Breadcrums
