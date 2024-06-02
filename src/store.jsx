import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user"; // Make sure this import is correct

const reducer = {
  user: userSlice.reducer, // Access the 'reducer' property of the userSlice
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
