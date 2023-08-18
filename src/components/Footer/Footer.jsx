import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 15,
          when an unknown printer took a galley of type and scrambled it to make a  
          specimen book. 
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 15,
          when an unknown printer took a galley of type and scrambled it to make a  
          specimen book.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">Lorem Ipsum has been the industry</span>
        </div>
        <div className="right">
          <img className="img-paymant" src="\img\FooterPaymant.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer