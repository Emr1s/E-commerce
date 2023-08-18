import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss'

const Cart = () => {
    const data = [{
        id: 1,
        img: "https://img3.akspic.ru/previews/3/0/3/8/3/138303/138303-zhenshhina-plecho-belye-krasota-manekenshhica-500x.jpg",
        img2: "https://img3.akspic.ru/previews/2/0/3/8/3/138302/138302-belye-ulichnaya_moda-snimok-obuv-feshn-500x.jpg",
        title: "Long Sleeve T-Shirt",
        desc: "Long Sleeve T-Shirt",
        isNew: true,
        oldPrice: 50,
        price: 20,
      },
      {
        id: 2,
        img: "https://img1.akspic.ru/previews/0/2/7/5/4/145720/145720-shorty-nebo-feshn-rozovyj-zhenshhina-500x.jpg",
        title: "Long Sleeve T-Shirt",
        desc: "Long Sleeve T-Shirt",
        isNew: true,
        oldPrice: 50,
        price: 20,
      },]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map( item =>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon  className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart