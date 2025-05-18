import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { shopContext } from '../../context/shopContext';
import { toast } from 'react-toastify';

const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(shopContext);
    const {getTotalCartCount} = useContext(shopContext);
  return (
    <div className='product-display-container'>
      <div className='product-left-part'>
        <div className="product-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className='product-img'>
        <img src={product.image} alt="" />
        </div>
      </div>
      <div className='product-right-part'>
        <div className="product-name">
            <p>{product.name}</p>
        </div>
        <div className="stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <span>(122)</span>
        </div>
        <div className="product-price">
            <div className="product-old-price">
                ${product.old_price}
            </div>
            <div className="product-new-price">
                ${product.new_price}
            </div>            
        </div>
        <div className="product-desc">
            A lightweight, usually knitted, pullover shirt, colse-fitting and with a round neckline and short sleeves, warn as an undershirt or outer garment.
        </div>
        <div className="select-size">
            <p>Select Size</p>
            <div className="sizes">
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                </ul>
            </div>
        </div>
        <div className="add-to-cart-btn">
            <button onClick={()=>{const res = addToCart(product.id); res?toast.success("Item Added to Cart"):toast.error("Failed !!")}}>ADD TO CART</button>
        </div>
        <div className="product-category">
            <p><span>Category : </span>Men, Kids, T-shirt, Jacket</p>
        </div>
        <div className="product-tags">
            <p><span>Tags : </span>Modern, latest</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProductDisplay
