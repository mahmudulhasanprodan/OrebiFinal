import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice from '../ProductSlice/ProductSlice';
import  CartSlice, { GetTotal }  from '../CartSlice/CartSlice';

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
    Cart: CartSlice,
  },
})
store.dispatch(GetTotal())
export default store;