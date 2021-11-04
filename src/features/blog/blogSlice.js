import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: [],
  blog: [],
  slider: [],
  featured: []
};

export const getSlider = createAsyncThunk(
  "blog/getSlider",
  async () => {
    return await axios
      .get(`http://localhost:3004/blog?&_limit=5`)
      .then((res) => res.data);
  }
);

export const getUser = createAsyncThunk(
  "blog/getUser",
  async () => {
    return await axios
      .get(`http://localhost:3004/user`)
      .then((res) => res.data);
  }
);

export const getFeatured = createAsyncThunk(
  "blog/getFeatured",
  async () => {
    return await axios
      .get(`http://localhost:3004/blog/?_start=6&_end=8`)
      .then((res) => res.data);
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  
  },
  extraReducers: {
    [getSlider.fulfilled]: (state, {payload}) => {
      state.slider = payload
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.user = payload
    },
    [getFeatured.fulfilled]: (state, {payload}) => {
      state.featured = payload
    },
  },
});
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSlider = (state) => state.blog.slider;
export const selectUser = (state) => state.blog.user;
export const selectFeatured = (state) => state.blog.featured;



export default blogSlice.reducer;
