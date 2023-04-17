import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "./getProductApi";

const initialState = {
  entities: [],
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
        return {
          ...state,
          entities: action.payload,
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