import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js"

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})