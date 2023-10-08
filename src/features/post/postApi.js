import apiSlice from '../api/apiSlice';

const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
     // GET POSTS
     getPosts: builder.query({
      query: (data) => ({
        url: '/posts',
        method: 'GET',
      }),
      providesTags:['Posts']
    }),

    // CREATE POSTS
    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts/create-post',
        method: 'POST',
        body:data
      }),
      invalidatesTags:['Posts']
    }),
   

  }),
});

export const { useGetPostsQuery ,useCreatePostMutation} = postApi;
