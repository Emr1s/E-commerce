import Card from '../Card/Card'
import React from 'react'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    const data = [
      {
        id: 1,
        img: "https://img3.akspic.ru/previews/3/0/3/8/3/138303/138303-zhenshhina-plecho-belye-krasota-manekenshhica-500x.jpg",
        img2: "https://img3.akspic.ru/previews/2/0/3/8/3/138302/138302-belye-ulichnaya_moda-snimok-obuv-feshn-500x.jpg",
        title: "Long Sleeve T-Shirt",
        isNew: true,
        oldPrice: 50,
        price: 20,
      },
      {
        id: 2,
        img: "https://img1.akspic.ru/previews/0/2/7/5/4/145720/145720-shorty-nebo-feshn-rozovyj-zhenshhina-500x.jpg",
        title: "Long Sleeve T-Shirt",
        isNew: true,
        oldPrice: 50,
        price: 20,
      },
      {
        id: 3,
        img: "https://img1.akspic.ru/previews/8/3/6/5/6/165638/165638-kedy-bashmak-internet_magazin-odezhda-nike-500x.jpg",
        title: "Long Sleeve T-Shirt",
        isNew: false,
        oldPrice: 50,
        price: 20,
      },
      {
        id: 4,
        img: "https://img1.akspic.ru/previews/0/8/0/7/27080/27080-zhenshhina-odezhda-noga-nyujork-avtomobil-500x.jpg",
        title: "Long Sleeve T-Shirt",
        isNew: false,
        oldPrice: 50,
        price: 20,
      },

    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>
        </div>
        <div className="bottom">
            {data.map( item => 
                <Card item = {item} key={item.id}/>
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts