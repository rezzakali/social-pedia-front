import { List, ListItemPrefix, Typography } from '@material-tailwind/react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';

const SocialProfile = () => {
  return (
    <>
      <Typography variant="h6" className="text-start dark:text-darkText ml-4">
        Social Profiles
      </Typography>
      <List>
        <div className="py-1 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between p-2 rounded">
          <div className="flex items-center">
            <ListItemPrefix>
              <BsTwitter className="w-6 h-6 dark:text-darkText" />
            </ListItemPrefix>
            <div className="dark:text-darkText">
              <Typography variant="h6">Twitter</Typography>
              <Typography className="text-xs">Social Network</Typography>
            </div>
          </div>
          <div>
            <MdOutlineModeEditOutline className="dark:text-darkText" />
          </div>
        </div>
        <div className="py-1 mb-2 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between p-2 rounded">
          <div className="flex items-center">
            <ListItemPrefix>
              <AiFillLinkedin className="w-6 h-6 dark:text-darkText" />
            </ListItemPrefix>
            <div className="dark:text-darkText">
              <Typography variant="h6">LinkedIn</Typography>
              <Typography className="text-xs">Social Network</Typography>
            </div>
          </div>
          <div>
            <MdOutlineModeEditOutline className="dark:text-darkText" />
          </div>
        </div>
      </List>
    </>
  );
};

export default SocialProfile;
