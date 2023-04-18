
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ProductForm from './Components/ProductForm'
import Product from './redux/features/productSlice/Product'
import { getProductAsync } from './redux/features/productSlice/productSlice'

function App() {
  const {product} = useSelector(state => state)
  const dispatch = useDispatch()
  const form = useMemo(()=> {return <ProductForm product={product}/>}, [product.categories.length])
  return (
    <div className="App">
      <h1>Products</h1>
      {!product.entities.length? <p>Click to get Products</p> : ""}
      {product.categories.length? form : ""}
      {product.entities.length? <Product product={product}/> : ""}
      {!product.entities.length? <p>{product.status}</p> : ""}
      <button 
        onClick={()=> {
          dispatch(getProductAsync(`https://dummyjson.com/products`))
        }}
        disabled={product.entities.length === 100}
        >Get Products
      </button>
    </div>
  )
}

export default App
