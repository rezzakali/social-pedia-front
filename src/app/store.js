import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/post/postSlice';
import friendsReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    posts: postReducer,
    friends: friendsReducer,
  },
  devTools: import.meta.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default store;
