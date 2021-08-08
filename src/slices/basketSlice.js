import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      const idx = state.items.findIndex(cartItem => cartItem.id === action.payload.id)
      let newCart = [...state.items]
      if(idx >= 0){
        //remove if exists
        newCart.splice(idx, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it's not in your cart`
        )
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - Pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0) 

export default cartSlice.reducer;