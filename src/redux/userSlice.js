import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage (if exists)
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser || null,
  isLoggedIn: !!savedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    loadUser: (state) => {
      const saved = JSON.parse(localStorage.getItem("user"));
      if (saved) {
        state.user = saved;
        state.isLoggedIn = true;
      }
    },
  },
});

export const { signup, login, logout, loadUser } = userSlice.actions;
export default userSlice.reducer;

