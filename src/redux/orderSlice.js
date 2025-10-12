import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        id: "ORD" + Date.now().toString().slice(-6),
        items: action.payload.items,
        total: action.payload.total,
        createdAt: new Date().toISOString(),
      };
      state.history.push(newOrder);
    },
    clearOrders: (state) => {
      state.history = [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;

