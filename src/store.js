import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import userReducer from "./redux/userSlice";
import ordersReducer from "./redux/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});

export default store;
