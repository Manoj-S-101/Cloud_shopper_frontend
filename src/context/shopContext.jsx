import React, { createContext, useState } from "react";
// import all_product from "../Assets/all_product";
import BASE_URL from "../service/BaseAddress";
import { useEffect } from "react";

export const shopContext = createContext(null);

const getDefaultCartItems = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCartItems());
  const [all_product,setAll_product] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    
    fetch(`${BASE_URL}/allproducts`).then((resp)=>resp.json()).then((data)=>{setAll_product(data); setLoading(false);})

    if(localStorage.getItem('auth-token')){
      fetch(`${BASE_URL}/getcart`,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
      })
      .then((resp)=>resp.json())
      .then((data)=>setCartItems(data));
    }
  },[])

  const addToCart = (itemId) => {
    let res = true;
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch(`${BASE_URL}/addtocart`,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((resp)=>resp.json())
      .then((data)=>{
        res=data;
        if (res) {
          return true;
        } else {
          return false;
        }
      });
    }
    return res;
  };

  const removeFromCart = (itemId) => {
    let res=true;
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch(`${BASE_URL}/removefromcart`,{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((resp)=>resp.json())
      .then((data)=>{
        res = data;
        if (res) {
          return true;
        } else {
          return false;
        }
      });
    }
    return res;
  };

  const getTotalCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) totalCount += cartItems[item];
    }
    return totalCount;
  };

  const getTotalCartPrice = () => {
    let total = 0;
    all_product.map((item)=> {
        if (cartItems[item.id] > 0) {
                total += cartItems[item.id] * item.new_price;
        }
    })
    return total;
};

  const contextValue = {
    all_product,
    loading,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartCount,
    getTotalCartPrice,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
