// store/thunks/branchThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import Mainapi from '../../api/main.api.js'; // Correct import of the default instance

export const fetchAllbranch = createAsyncThunk(
  'branch/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await Mainapi.getAllBranch(); // Already returns response.data
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
