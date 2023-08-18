import React from 'react'
import { useState } from 'react'
import './Product.scss'
import AddShopingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
  const data = [
    "https://img3.akspic.ru/previews/3/0/3/8/3/138303/138303-zhenshhina-plecho-belye-krasota-manekenshhica-500x.jpg",
    "https://img3.akspic.ru/previews/2/0/3/8/3/138302/138302-belye-ulichnaya_moda-snimok-obuv-feshn-500x.jpg",
  ]

  const [selectedImg, setSelectedImg] = useState(0)
  const [index, setIndex] = useState(1)

  const addClickHandler = () => {

    setIndex(prev => prev === 1 ? prev = 1 : prev - 1)
  }

  return (
    <div className='product'>
      <div className="left">
        <div className="image">
          <img src={data[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={data[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImage">
          <img src={data[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$19.99</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting </p>
        <div className="quantity">
          <button onClick={addClickHandler}>-</button>
          {index}
          <button onClick={() => { setIndex(prev => prev + 1) }}>+</button>
        </div>
          <button className='add'>
             <AddShopingCartIcon /> ADD TO CARD
            </button>
        <div className="link">
          <div className="item">
              <FavoriteBorderIcon /> ADD TO FAVORITE
          </div>
          <div className="item">
              <BalanceIcon /> BUY NOW
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Brand : Polo</span>
          <span>Model : Polo</span>
        </div>
        <hr />
        <div className="details">
          <span>Details</span>
          <hr />
          <span>Description</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product