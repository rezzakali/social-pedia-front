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

    addRemoveFriend: builder.mutation({
      query: ({ id, friendId }) => ({
        url: `/users/${id}/${friendId}`,
        method: 'PATCH',
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData('getUserFriends', arg.id, (draft) => {
              draft.data = response.data;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // ###############  GET USER #################
    getUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUserFriendsQuery,
  useGetUserQuery,
  useAddRemoveFriendMutation,
} = userApi;
