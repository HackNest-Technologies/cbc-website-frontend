// features/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    filter: "All",      // All | Books | Audios | Liked
    cart: [],           // array of book objects or ids
    liked: [],          // array of liked book ids
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
    toggleLike: (state, action) => {
      if (state.liked.includes(action.payload)) {
        state.liked = state.liked.filter((id) => id !== action.payload);
      } else {
        state.liked.push(action.payload);
      }
    },
  },
});

export const { setFilter, addToCart, removeFromCart, toggleLike } = booksSlice.actions;

export default booksSlice.reducer;
