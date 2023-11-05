import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postId: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const { setPosts, setPostId } = postSlice.actions;

export default postSlice.reducer;
