import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
