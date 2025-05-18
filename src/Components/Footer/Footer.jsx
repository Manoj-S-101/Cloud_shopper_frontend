import React from 'react'
import './Footer.css'
import logo_icon from '../../Assets/logo.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer-main-class'>
    <div className='footer'>
       <div className="logo">
        <img src={logo_icon} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="footer-list">
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className="social-media-icons">
        <ul>
            <li><img src={instagram_icon} alt="" /></li>
            <li><img src={pintester_icon} alt="" /></li>
            <li><img src={whatsapp_icon} alt="" /></li>
        </ul>
      </div>
      </div>
    
      <div className="copyright">
        <hr/>
        <p>Copyright @ 2024 SKMdev - All Rights are Reserved</p>
      </div>
    
    </div>
  )
}

export default Footer
