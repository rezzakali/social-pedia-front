import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    removeFriend: (state, action) => {
      let tempFriends = [...state.friends];
      tempFriends = state.friends.filter(
        (friend) => friend._id !== action.payload
      );
      state.friends = tempFriends;
    },
  },
});

export const { setFriends, removeFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
