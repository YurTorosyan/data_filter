import React from 'react'
import { useDispatch } from 'react-redux';
import { filterData } from '../redux/features/productSlice/productSlice';
import "./ProductForm.scss";

export default function ProductForm({product}) {
  const dispatch = useDispatch()
  return (
    <form className='productForm'>
      <label htmlFor="category">Choose product category</label>
        <select name="category" id="category" onChange={(e)=>dispatch(filterData(e.target.value))}>
          <option value="all" selected>All</option>
          {
            product.categories.map(elem => {
              return (
                <option value={elem} key={crypto.randomUUID()}>{elem}</option>
              )
            })
          }
        </select>
      </form>
  )
}
