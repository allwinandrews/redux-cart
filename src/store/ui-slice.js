import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisble: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisble = !state.cartIsVisble;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;

      state.notification = {
        status,
        title,
        message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
