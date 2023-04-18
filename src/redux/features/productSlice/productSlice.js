import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "./getProductApi";

const initialState = {
  data: [],
  entities: [],
  categories: [],
  status: null
}

export const getProductAsync = createAsyncThunk(
  "PRODUCT/getProduct",
  async (url) => {
    const products = await fetchProductApi(url)
    const categories = await fetchProductApi(url + "/categories")

    return {
      products: products.products,
      categories
    }
  }
)

const productSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    filterData(state, action) {
      console.log(action.payload)
      if(action.payload === "all"){
        return {...state, entities: [...state.data]}
      }
      const filteredEntities = state.data.filter(elem => elem.category === action.payload)
      return {...state, entities: filteredEntities}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state, action) => {
        state.status = "Products are Loading, Please Wait..."
        return state
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        return {
          ...state,
          categories: action.payload.categories,
          data: action.payload.products,
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

export const { filterData } = productSlice.actions
export default productSlice.reducer 