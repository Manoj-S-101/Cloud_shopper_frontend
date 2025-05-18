import React, { useContext } from 'react'
import {shopContext} from '../context/shopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/productdisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product,loading } = useContext(shopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id===Number(productId));
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }
  return (
    <div className='product-container'>
      <Breadcrums category={product.category} name={product.name} />
      <ProductDisplay product={product}/>
      <Description />
      <RelatedProducts category={product.category} id={product.id}/>
    </div>
  )
}

export default Product
