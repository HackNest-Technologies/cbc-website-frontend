import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('booksState');
    if (serializedState === null) {
      return {
        filter: "All",
        cart: [],
        liked: [],
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      filter: "All",
      cart: [],
      liked: [],
    };
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('booksState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const booksSlice = createSlice({
  name: "books",
  initialState: loadState(),
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      saveState(state);
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveState(state);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveState(state);
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveState(state);
    },
    toggleLike: (state, action) => {
      if (state.liked.includes(action.payload)) {
        state.liked = state.liked.filter((id) => id !== action.payload);
      } else {
        state.liked.push(action.payload);
      }
      saveState(state);
    },
    clearCart: (state) => {
      state.cart = [];
      saveState(state);
    },
  },
});

export const { 
  setFilter, 
  addToCart, 
  removeFromCart, 
  updateCartQuantity,
  toggleLike, 
  clearCart 
} = booksSlice.actions;

export default booksSlice.reducer;