import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data: [],
  Status: "Idle",
};

export const ProductSlice = createSlice({
    name: 'ProductItem',
    initialState,

    reducers: {
        SetProduct:(state,action) => {

        },
    },
});


export const {SetProduct} = ProductSlice.actions

export default ProductSlice.reducer