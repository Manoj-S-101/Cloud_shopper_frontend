import React,{useContext} from 'react'
import './CSSfile/shopCategory.css'
import { shopContext } from '../context/shopContext';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className='shopcategory'>
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="indexing-product">
        <p>
          <span>Showing 1-12 </span> out of 54 Products
        </p>
        <button>Sort by <img src={dropdown_icon} alt="" /></button>
      </div>
      <div className="category-products">
        {
          all_product.map((product,i)=>{
            if(props.category === product.category)
            {
              return (<Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />)
            }
            else{
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default ShopCategory
