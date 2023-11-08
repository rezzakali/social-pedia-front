import { Typography } from '@material-tailwind/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../features/post/postApi';
import { useGetUserQuery } from '../../features/user/userApi';
import Feed from '../Home/Feeds/Feed';
import FriendsLists from '../Home/FriendsLists';
import ProfileMenuCard from '../Home/ProfileMenuCard';

const index = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery(id);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
  } = useGetPostsQuery();
  const filteredPosts = posts?.posts?.filter((post) => post.userId === id);

  return (
    <div className="flex">
      <div className="w-1/3 p-3 hidden lg:block">
        {!isLoading && !isError && <ProfileMenuCard user={user?.user} />}
      </div>
      <div className="sm:w-full lg:w-2/3 p-3 h-[calc(100vh-7rem)] space-y-3">
        {isPostsLoading && <Typography>Loading...</Typography>}
        {!isPostsLoading && isPostsError && (
          <Typography>{postsError?.data?.message}</Typography>
        )}
        {!isPostsLoading && !isPostsError && posts?.posts?.length <= 0 && (
          <Typography>No posts</Typography>
        )}

        {!isPostsLoading &&
          !isPostsError &&
          filteredPosts?.length > 0 &&
          filteredPosts.map((post, index) => {
            return <Feed key={index} post={post} />;
          })}
      </div>
      <div className="w-1/3 p-3 space-y-3 hidden lg:block">
        <FriendsLists user={user?.user} isSingleUserId={id} />
      </div>
    </div>
  );
};

export default index;
