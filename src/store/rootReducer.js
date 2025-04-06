import { combineReducers } from "@reduxjs/toolkit";
import branchReducer  from "./slice/branchSlice.js"; // Correct import of the branch reducer

const rootReducer = combineReducers({
  branch: branchReducer, // ✅ Correct key-value pair
});

export default rootReducer;
