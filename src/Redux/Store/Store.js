import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice from '../ProductSlice/ProductSlice';

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
  },
})

export default store;