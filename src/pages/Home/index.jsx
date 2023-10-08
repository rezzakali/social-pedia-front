import React from 'react';
import Feeds from './Feeds/Feeds';
import FriendsLists from './FriendsLists';
import ProfileMenuCard from './ProfileMenuCard';
import Sponsored from './Sponsored';

const index = () => {
  return (
    <div className="flex">
      <div className="w-1/3 p-3">
        <ProfileMenuCard />
      </div>
      <div className="w-2/3 p-3 h-[calc(100vh-7rem)] space-y-3">
        <Feeds />
      </div>
      <div className="w-1/3 p-3 space-y-3">
        <Sponsored />
        <FriendsLists />
      </div>
    </div>
  );
};

export default index;
