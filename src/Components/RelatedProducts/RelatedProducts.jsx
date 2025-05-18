import React, { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { Link} from "react-router-dom"
import arrow_icon from '../../Assets/breadcrum_arrow.png'
import {shopContext} from '../../context/shopContext'

const RelatedProducts = ({category,id}) => {
    let count=1;
    const { all_product } = useContext(shopContext);
  return (
    <>
    <div className='RelatedProducts'>
      <h1>Related Products</h1>
      <div className='Related-products'>
       {  all_product.map((product,i) => {
        if( product.category === category && product.id !== id && count<5){
            count++;
            return (<Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />)      
        }
    })}
      </div>
      </div>
      <div className='more-btn'>
      <Link to={`/${category}`} ><button>More <img src={arrow_icon} alt="" /></button></Link>
      </div>
    </>
  )
}

export default RelatedProducts
