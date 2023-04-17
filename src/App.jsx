
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Product from './redux/features/productSlice/Product'
import { addLimit, getProductAsync } from './redux/features/productSlice/productSlice'

function App() {
  const {product} = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Product product={product}/>
      <p>{product.status}</p>
      <button 
        onClick={()=> {
          dispatch(getProductAsync(`https://dummyjson.com/products?limit=${product.limit}`))
          dispatch(addLimit())
        }}
        disabled={product.limit === 100}
        >Get Products
      </button>
    </div>
  )
}

export default App
