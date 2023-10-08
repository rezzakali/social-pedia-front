import apiSlice from '../api/apiSlice';

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET USER FRIENDS
    getUserFriends: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/friends`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserFriendsQuery } = userApi;
