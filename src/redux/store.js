import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice
  }
})

export default store