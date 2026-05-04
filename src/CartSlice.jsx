import { createSlice } from '@reduxjs/toolkit';

// "Task 3 completed: State management using Redux
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // -----------------------------
    // 1. ADD ITEM
    // -----------------------------
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // Increase quantity
        existingItem.quantity++;
      } else {
        // Add new item with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1
        });
      }    
    },

    // -----------------------------
    // 2. REMOVE ITEM
    // -----------------------------
    removeItem: (state, action) => {
      // action.payload = name of the item to remove
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // -----------------------------
    // 3. UPDATE QUANTITY
    // -----------------------------
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }    
    },
  },
});

// Export actions for use in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
