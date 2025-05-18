import React, { useContext } from 'react'
import './CartItems.css'
import cross_icon from '../../Assets/cart_cross_icon.png'
import { shopContext } from '../../context/shopContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartItems = () => {
    const {removeFromCart} = useContext(shopContext);
    const {cartItems,all_product,getTotalCartPrice} = useContext(shopContext);
  return (
    <div className='cartItems'>
      <div className="topic-details">
        <p className="product-img">Products</p>
        <p className="product-title">Title</p>
        <p className="product-price">Price</p>
        <p className="product-quantity">Quantity</p>
        <p className="product-total-price">Total</p>
        <p className="remove-product">Remove</p>
      </div>
      <hr/>
      <div className="display-cartitems">
        {
            all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                   return(
                    <React.Fragment key={e.id}>
                    <div className="in-small">{e.name}</div>
                    <div className='display-cartitems-inside-one' key={e.id}>
                    <Link to={`/product/${e.id}`}><div className="product-img"><img src={e.image} alt="" /></div></Link>
                    <div className="product-title">{e.name}</div>
                    <div className="product-price">${e.new_price}</div>
                    <div className="product-quantity">{cartItems[e.id]}</div>
                    <div className="product-total-price">${cartItems[e.id]*e.new_price}</div>
                    <div className="remove-product" ><img src={cross_icon} onClick={()=>{let res = removeFromCart(e.id); res?toast.success("Item Removed from Cart"):toast.error("Failed !!")}} alt="" /></div>
                    </div>
                    <hr/>
                    </React.Fragment>
                   )
                }
            })
        }
      </div>
      <div className="cart-totals-main">
        <div className="cart-totals">
            <p>Cart Totals</p>
            <div className="subtotal flex-class">
                <p>Subtotal</p>
                <p>${getTotalCartPrice()}</p>
            </div>
            <hr />
            <div className="shipping-fee flex-class">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="total flex-class">
                <p>Total</p>
                <p>${getTotalCartPrice()}</p>
            </div>
            <div className="proceed-btn flex-last in-big-screen">
            <button>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        <div className="promo-code">
            <p>If you have a promo code, Enter it here</p>
            <div className="input-promo">
            <input type='text' placeholder="Promo Code"/>
            <button>Submit</button>
            </div>
        </div>
      </div>
      <div className="proceed-btn flex-last in-small-screen">
            <button>PROCEED TO CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartItems
