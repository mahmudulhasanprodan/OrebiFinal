import { createSlice } from '@reduxjs/toolkit'
import { toast,Bounce} from 'react-toastify';


const initialState = {
  CartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  TotalItem: 0,
  TotalAmount: 0,
};


  export const CartSlice = createSlice({
    name: "Cart",
    initialState,

    reducers: {
      AddtoCart: (state, action) => {
        const findIndex = state.CartItem.findIndex((item) => {
          return item.id === action.payload.id;             
        })
        if (findIndex >= 0) {
        state.CartItem[findIndex].CartQuantity += 1;
        localStorage.setItem("cartItem",JSON.stringify(state.CartItem))
        toast.success(`${action.payload.title} Again Added`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
         
        } else {
          state.CartItem.push({ ...action.payload, CartQuantity: 1 });
          localStorage.setItem("cartItem",JSON.stringify(state.CartItem))
          toast.success(`${action.payload.title} Added`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        
      },
      removeItem: (state,action) => {
        const removeitem = state.CartItem.filter((item) => 
           item.id !== action.payload.id,
        );
        state.CartItem = removeitem,
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem)) 
        toast.info(`${action.payload.title} Remove item`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });      
      },
    },
  });


  
  export const {AddtoCart,removeItem} = CartSlice.actions
  
  export default CartSlice.reducer