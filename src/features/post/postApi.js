import apiSlice from '../api/apiSlice';

const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET POSTS
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
      providesTags: ['Posts'],
    }),

    // CREATE POSTS
    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts/create-post',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),

    // ############### GET USER'S POSTS ##############
    getUserPosts: builder.query({
      query: ({ userId }) => ({
        url: `/posts/${userId}`,
        method: 'GET',
      }),
    }),
    // ############# LIKE A POST ###############
    likeAPost: builder.mutation({
      query: ({ postId, userId }) => ({
        url: `/posts/${postId}/like`,
        method: 'PATCH',
        body: { userId },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData('getPosts', undefined, (draft) => {
              const post = draft.posts.find((post) => post._id === arg.postId);

              if (post) {
                const findIndex = draft.posts.indexOf(post);

                draft.posts[findIndex] = response?.data?.updatedPost;
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // ############## ADD COMMENT ##################
    addComment: builder.mutation({
      query: ({ comment, postId, userId }) => ({
        url: `/posts/${postId}/add-comment`,
        method: 'PATCH',
        body: { userId, comment },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData('getPosts', undefined, (draft) => {
              const post = draft.posts.find((post) => post._id === arg.postId);

              if (post) {
                const findIndex = draft.posts.indexOf(post);

                draft.posts[findIndex] = response?.data?.updatedPost;
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useGetUserPostsQuery,
  useLikeAPostMutation,
  useAddCommentMutation,
} = postApi;
