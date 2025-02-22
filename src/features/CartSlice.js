import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state,action)=>{
        state.cart = action.payload
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (CartItem) => CartItem.id === action.payload.id
      );
      if (existingItem) {
        toast.info("Product already added",{
            closeButton: false,
        });
        return;
      } else {
        let cart = {
          name: action.payload.name,
          id: action.payload.id,
          description: action.payload.description,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.cart.push(cart);
        toast("Added to cart",{
            closeButton: false
        })
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (CartItem) => CartItem.id !== action.payload
      );
      toast.info("Removed from cart",{
        closeButton:false,
      })
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart, removeFromCart,setCart } = cartSlice.actions;
