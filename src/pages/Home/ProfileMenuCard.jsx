import {
  Avatar,
  Card,
  List,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import SocialProfile from './SocialProfile';

const ProfileMenuCard = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    profileImage,
    firstname,
    lastname,
    occupassion,
    friends,
    location,
    profileViews,
    impression,
  } = user || {};

  return (
    <Card className="w-72 dark:bg-lightDark">
      <List>
        <div className="dark:hover:bg-darkGray flex items-center justify-between p-2 rounded">
          <div className="flex items-center gap-3">
            <div>
              <Avatar
                variant="circular"
                alt="candice"
                src={profileImage}
                className="w-9 h-9"
              />
            </div>
            <div className="dark:text-darkText">
              <Typography>{firstname + ' ' + lastname}</Typography>
              <Typography variant="small" className="font-normal">
                {friends?.length} friends
              </Typography>
            </div>
          </div>
          <RiUserSettingsLine className="dark:text-darkText" />
        </div>
        <hr />
        <div className="rounded py-1.5 text-sm font-normal flex items-center dark:text-darkText dark:hover:bg-darkGray p-2">
          <ListItemPrefix>
            <MdOutlineLocationOn />
          </ListItemPrefix>
          <Typography>{location}</Typography>
        </div>
        <div className="rounded py-1.5 text-sm font-normal flex items-center dark:text-darkText dark:hover:bg-darkGray p-2">
          <ListItemPrefix>
            <PiSuitcaseSimpleLight />
          </ListItemPrefix>
          <Typography>{occupassion}</Typography>
        </div>
        <hr />
        <div className="group rounded-none py-1.5 px-3 text-sm font-normal flex items-center justify-between dark:text-darkText">
          <Typography variant="small"> Who's viewed your profile</Typography>
          <Typography variant="small" className="font-semibold">
            {profileViews}
          </Typography>
        </div>
        <div className="group rounded-none py-1.5 px-3 text-sm font-normal flex items-center justify-between dark:text-darkText">
          <Typography variant="small">Impression of your post</Typography>
          <Typography variant="small" className="font-semibold">
            {impression}
          </Typography>
        </div>
        <hr />
      </List>
      <SocialProfile />
    </Card>
  );
};

export default ProfileMenuCard;
