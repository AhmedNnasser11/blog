import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blog: [],
};

export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async () => {
    return await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => res.data);
  }
);


export const counterSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  
  },
  extraReducers: {
    [getBlog.fulfilled]: (state, {payload}) => {
      state.blog = payload
    },
  },
});
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBlog = (state) => state.blog;


export default selectBlog.reducer;
