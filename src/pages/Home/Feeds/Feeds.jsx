import { Typography } from '@material-tailwind/react';
import React, { Fragment } from 'react';
import { useGetPostsQuery } from '../../../features/post/postApi';
import AddPost from './AddFeed';
import Feed from './Feed';

const Feeds = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  // polling invterval for 5 minutes
  // undefined, { pollingInterval: 300000 }

  return (
    <Fragment>
      <AddPost />
      {isLoading && <Typography>Loading...</Typography>}
      {!isLoading && isError && <Typography>{error?.data?.message}</Typography>}
      {!isLoading && !isError && posts?.posts?.length <= 0 && (
        <Typography>No posts</Typography>
      )}

      {!isLoading &&
        !isError &&
        posts?.posts?.length > 0 &&
        posts.posts.map((post, index) => {
          return <Feed key={index} post={post} />;
        })}

      {/* {Array.from({ length: 6 }, (_, index) => (
        
      ))} */}
    </Fragment>
  );
};

export default Feeds;
