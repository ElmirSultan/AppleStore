import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    mode: "light",
  },

  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    addProduct: (state, action) => {
      const findedProduct = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findedProduct) {
        findedProduct.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.newPrice;
    },
    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.newPrice * action.payload.quantity;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      cartItem.quantity += 1
      state.total += cartItem.newPrice
    },
    decrease: (state,action) => {
        const cartItem = state.cartItems.find(
            (item) => item._id === action.payload._id
        );

        cartItem.quantity -= 1
        state.total -= cartItem.newPrice
        if(cartItem.quantity === 0) {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload._id
            );
        }
    },
    reset:(state) => {
        state.cartItems = [];
        state.total = 0
    }
  },
});


export const {addProduct,deleteProduct,increase,decrease,reset,setMode,setLogin,setLogout} = cartSlice.actions;
export default cartSlice.reducer;