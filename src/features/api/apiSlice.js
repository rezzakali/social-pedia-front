import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: 30,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('x-access-token', `${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
