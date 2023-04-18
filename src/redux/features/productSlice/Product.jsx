import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faFolderOpen, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'

import "./Product.scss"


function Product({product}) {
  return (
    <div className='product'>
      <div className="product__wrap">
        {product.entities.map(elem => {
          return (
          <div className="product__item" key={crypto.randomUUID()}>
              <div className="product__thumbnail">
                <img src={elem.thumbnail} alt="Thumbnail"/>
              </div>
            <div className="product__content">
              <h3 className='product__title'>{elem.title}</h3>
              <p className='product__desc'>{elem.description}</p>
              <p className='product__price'>${elem.price}</p>
              <div className="product__info">
                <p className="product__rating"><FontAwesomeIcon icon={faStarHalfStroke} /> {elem.rating}</p>
                <p className="product__brand"><FontAwesomeIcon icon={faCopyright} /> {elem.brand}</p>
                <p className="product__category"><FontAwesomeIcon icon={faFolderOpen} /> {elem.category}</p>
              </div>
            </div>
            <button className='product__btn'>Add to Cart</button>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product

// {"id":1,
// "title":"iPhone 9",
// "description":"An apple mobile which is nothing like apple",
// "price":549,
// "discountPercentage":12.96,
// "rating":4.69,"stock":94,
// "brand":"Apple",
// "category":"smartphones",
// "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// "images":[
//   "https://i.dummyjson.com/data/products/1/1.jpg",
//   "https://i.dummyjson.com/data/products/1/2.jpg",
//   "https://i.dummyjson.com/data/products/1/3.jpg",
//   "https://i.dummyjson.com/data/products/1/4.jpg",
//   "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//   ]
// }