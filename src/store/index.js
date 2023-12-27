import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import baseApi from "../api/baseApi";
import { cartSlice } from "@slices/cart";

const reducers = combineReducers({
  cart: cartSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
