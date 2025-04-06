// store/slices/branchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllbranch } from '../thunks/branchThunk.js';

const initialState = {
  branches: [],
  status: 'idle',
  error: null,
};

const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllbranch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllbranch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.branches = action.payload;
      })
      .addCase(fetchAllbranch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default branchSlice.reducer;
