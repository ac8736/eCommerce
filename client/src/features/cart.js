import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      const oldItems = state.value.items;
      oldItems.push(payload);
      state.value = { items: oldItems };
    },
    remove: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
