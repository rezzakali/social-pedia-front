import React from 'react';
import { useSelector } from 'react-redux';
import Feeds from './Feeds/Feeds';
import FriendsLists from './FriendsLists';
import ProfileMenuCard from './ProfileMenuCard';
import Sponsored from './Sponsored';

const index = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex">
      <div className="w-1/3 p-3 hidden lg:block">
        <ProfileMenuCard user={user} />
      </div>
      <div className="sm:w-full lg:w-2/3 p-3  space-y-3">
        <Feeds />
      </div>
      <div className="w-1/3 p-3 space-y-3 hidden lg:block">
        <Sponsored />
        <FriendsLists user={user} />
      </div>
    </div>
  );
};

export default index;
