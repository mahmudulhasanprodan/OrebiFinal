import { createSlice } from '@reduxjs/toolkit'

const ApiStatus = {
 IDLE : "Idle",
 LOADING: "Loading",
 ERROR : "Error",
};

const initialState = {
  Data: [],
  Status: ApiStatus.IDLE,
};

export const ProductSlice = createSlice({
    name: 'ProductItem',
    initialState,

    reducers: {
        SetProduct:(state,action) => {
          state.Data = action;         
        },
        SetStatus: (state,action) => {
         state.Status = action; 
        },
    },
});


// Writing the thunk function

export const FeatcherProduct = (apiUrl) => {
  return async function GetProduct(dispatch,getState) {
      try {
        dispatch(SetStatus(ApiStatus.LOADING));
        const response = await fetch("https://dummyjson.com/products");
        const JasonData = await response.json();
        dispatch(SetProduct(JasonData.products));
        dispatch(SetStatus(ApiStatus.IDLE));
      } catch (error) {
        dispatch(SetStatus(ApiStatus.ERROR));
        console.log(error);
        
      }     
  };
};


export const {SetProduct,SetStatus} = ProductSlice.actions

export default ProductSlice.reducer