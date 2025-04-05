import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"; // ✅ Correct import

const rootReducer = combineReducers({
  user: userReducer, // ✅ Correct key-value pair
});

export default rootReducer;
