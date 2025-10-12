import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, priceNumber, priceText, image, qty }
};

const recalc = (items) => items.reduce((s, it) => s + it.priceNumber * it.qty, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const found = state.items.find((i) => i.id === item.id);
      if (found) found.qty += 1;
      else state.items.push({ ...item, qty: 1 });
    },
    increment(state, action) {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) it.qty += 1;
    },
    decrement(state, action) {
      const id = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) {
        it.qty -= 1;
        if (it.qty <= 0) state.items = state.items.filter((x) => x.id !== id);
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

