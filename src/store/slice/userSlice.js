// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllBranch from '../../api/main.api.js'; // Adjust the import path as necessary

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const fetchAllbranch = createAsyncThunk('user/fetchallbranch', async () => {
  const response = await getAllBranch();
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllbranch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllbranch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchAllbranch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
