import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://img.freepik.com/free-vector/red-sale-price-tag-style-banner-design-template_1017-27328.jpg?w=2000" alt="" />
                    <Link className='link' to="/products/1">
                        <button className='button'>
                            Sale
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <img src="https://i.pinimg.com/originals/8b/cb/65/8bcb65754d8e6f08a7e3d1d2c9eab893.jpg" alt="" />
                    <Link className='link' to="/products/1">
                        <button className='button'>
                            Women
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row"> <img src="https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="" />
                    <button className='button'>
                        <Link className='link' to="/products/1">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row"> <img src="https://img1.akspic.ru/previews/5/6/8/5/4/145865/145865-model-krasota-selena_gomez-bashmak-feshn-500x.jpg" alt="" />
                            <Link className='link' to="/products/1">
                                <button className='button'>
                                    Men
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row"> <img src="https://img1.akspic.ru/previews/5/6/8/5/4/145865/145865-model-krasota-selena_gomez-bashmak-feshn-500x.jpg" alt="" />
                            <Link className='link' to="/products/1">
                                <button className='button'>
                                    Accessories
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdvcg_UYbvLZEs4cDS0Ga5y48VVnvEzhDXw&usqp=CAU" alt="" />
                    <Link className='link' to="/products/1">
                        <button className='button'>
                            Shoes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories