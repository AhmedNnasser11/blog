import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: [],
  blog: [],
  slider: [],
  featured: [],
  Accessibility: [],
  AndroidDev: [],
  Gadgets:[],
  status: null
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

export const getAccessibility = createAsyncThunk(
  "blog/getAccessibility",
  async () => {
    return await axios
      .get(`http://localhost:3004/blog?&_limit=6`)
      .then((res) => res.data);
  }
)

export const getAndroidDev = createAsyncThunk(
  "blog/getAndroidDev",
  async () => {
    return await axios
      .get(`http://localhost:3004/blog?&_limit=6`)
      .then((res) => res.data);
  }
)

export const getGadgets = createAsyncThunk(
  "blog/getGadgets",
  async () => {
    return await axios
      .get(`http://localhost:3004/blog?&_limit=6`)
      .then((res) => res.data);
  }
)

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  
  },
  extraReducers: {
    [getSlider.pending]: (state, {payload}) => {
      state.status = "loading"
    },
    [getSlider.fulfilled]: (state, {payload}) => {
      state.slider = payload.reverse()
      state.status = "success"
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.user = payload
    },
    [getFeatured.fulfilled]: (state, {payload}) => {
      state.featured = payload
    },
    [getAccessibility.pending]: (state, {payload}) => {
      state.status = "loading"
    },
    [getAccessibility.fulfilled]: (state, {payload}) => {
      state.Accessibility = payload
      state.status = "success"
    },
    [getAndroidDev.fulfilled]: (state, {payload}) => {
      state.AndroidDev = payload.reverse()
    },
    [getGadgets.fulfilled]: (state, {payload}) => {
      state.Gadgets = payload
    }
  },
});
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSliderStatus = (state) => state.blog.status;
export const selectSlider = (state) => state.blog.slider;
export const selectUser = (state) => state.blog.user;
export const selectFeatured = (state) => state.blog.featured;
export const selectAccessibility = (state) => state.blog.Accessibility;
export const selectAndroidDev = (state) => state.blog.AndroidDev;
export const selectGadgets = (state) => state.blog.Gadgets;



export default blogSlice.reducer;
