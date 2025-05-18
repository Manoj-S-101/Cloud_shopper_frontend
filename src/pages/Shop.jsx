import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import New_collections from '../Components/New_Collections/New_collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New_collections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
