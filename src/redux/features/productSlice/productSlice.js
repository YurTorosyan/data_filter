import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "./getProductApi";

const initialState = {
  entities: [
    {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},
    {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},
    {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},
  ],
  limit: 0,
  status: null
}

export const getProductAsync = createAsyncThunk(
  "PRODUCT/getProduct",
  async (url) => {
    const response = fetchProductApi(url)
    console.log(url)
    return response
  }
)

const productSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    addLimit(state, action) {
      if(state.limit < 100){
        state.limit = state.limit + 10
      }
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state, action) => {
        state.status = "Products are Loading, Please Wait..."
        return state
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        // console.log(action.payload.products)
        return {
          ...state,
          entities: action.payload.products,
          status: "Products are Loaded"
        }
      })
      .addCase(getProductAsync.rejected, (state, action) => {
        state.status = "Products not Found"
        return state
      })
  }
})

export const { addLimit } = productSlice.actions
export default productSlice.reducer 