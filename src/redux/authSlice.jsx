import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.isAdmin = action.payload?.is_admin || false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },

  // ⬇️ THIS IS THE IMPORTANT PART FOR COOKIE LOGIN
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.currentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;      // <-- Save backend user to Redux
        state.isAuthenticated = true;
        state.isAdmin = action.payload?.is_admin || false;
      }
    );
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
