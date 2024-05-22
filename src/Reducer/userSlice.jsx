import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchData } = userSlice.actions;
export default userSlice.reducer;
