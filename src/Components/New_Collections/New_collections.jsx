import React, { useEffect, useState } from 'react'
import './New_collections.css'
import Item from '../Item/Item'
import BASE_URL from '../../service/BaseAddress'

const New_collections = () => {
  const [new_collections,setNew_collections] = useState([]);
  useEffect(()=>{
    fetch(`${BASE_URL}/newcollection`).then((resp)=>resp.json()).then((data)=>setNew_collections(data));
  },[])
  return (
    <div className='new-collections' id="new-collections">
        <h1>New Collections</h1>
      <div className='new-products'>
       { new_collections.map((product,i) => {
            return (<Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />)
        })}
      </div>
    </div>
  )
}

export default New_collections
