import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    list: [],
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    addToCart: (state, action) => {
      const cart = [...state.cart, action.payload];
      const count = cart.length;
      console.log(count);
      return { ...state, cart, count };
    },
    removeFromCart: (state, action) => {
      const cart = state.cart.filter((item) => item.id !== action.payload);
      const count = cart.length;
      console.log(count);
      return { ...state, cart, count };
    },
  },
});
export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
