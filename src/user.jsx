import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { email: "", password: "" , header:false } },
  reducers: {
    login: (state, { payload }) => {
      state.value = payload;
    },
    logout: (state) => {
      state.value = { email: "", password: "" };
    },
    setLayout: (state, { payload }) => {
      state.layout = payload;
    },
    setToogleHeader: (state, { payload }) => {
      state.header = payload;
    },
  },
});

export const { login, logout, setLayout , setToogleHeader} = userSlice.actions;
export default userSlice.reducer;
