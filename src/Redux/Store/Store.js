import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice from '../ProductSlice/ProductSlice';
import  CartSlice  from '../CartSlice/CartSlice';

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
    Cart: CartSlice,
  },
})

export default store;