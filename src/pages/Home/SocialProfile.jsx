import { List, ListItemPrefix, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiCheckDouble } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';

const SocialProfile = () => {
  const [twitterInput, setTwitterInput] = useState('');
  const [twitterEditEnabled, setTwitterEditEnabled] = useState(false);

  const [linkedInInput, setLinkedInInput] = useState('');
  const [linkedInEditEnabled, setlinkedInEditEnabled] = useState(false);

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
              {twitterEditEnabled ? (
                <input
                  type="text"
                  value={twitterInput}
                  onChange={(e) => setTwitterInput(e.target.value)}
                  placeholder="username"
                  className="p-1 text-xs border border-gray-500 rounded"
                />
              ) : (
                <Typography className="text-xs">Social Network</Typography>
              )}
            </div>
          </div>
          {twitterEditEnabled ? (
            <BiCheckDouble
              className="text-green-500 cursor-pointer"
              onClick={() => setTwitterEditEnabled(!twitterEditEnabled)}
            />
          ) : (
            <MdOutlineModeEditOutline
              className="dark:text-darkText cursor-pointer"
              onClick={() => setTwitterEditEnabled(!twitterEditEnabled)}
            />
          )}
        </div>
        <div className="py-1 mb-2 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between p-2 rounded">
          <div className="flex items-center">
            <ListItemPrefix>
              <AiFillLinkedin className="w-6 h-6 dark:text-darkText" />
            </ListItemPrefix>
            <div className="dark:text-darkText">
              <Typography variant="h6">LinkedIn</Typography>
              {linkedInEditEnabled ? (
                <input
                  type="text"
                  value={linkedInInput}
                  onChange={(e) => setLinkedInInput(e.target.value)}
                  placeholder="username"
                  className="p-1 text-xs border border-gray-500 rounded"
                />
              ) : (
                <Typography className="text-xs">Social Network</Typography>
              )}
            </div>
          </div>
          {linkedInEditEnabled ? (
            <BiCheckDouble
              className="text-green-500 cursor-pointer"
              onClick={() => setlinkedInEditEnabled(!linkedInEditEnabled)}
            />
          ) : (
            <MdOutlineModeEditOutline
              className="dark:text-darkText cursor-pointer"
              onClick={() => setlinkedInEditEnabled(!linkedInEditEnabled)}
            />
          )}
        </div>
      </List>
    </>
  );
};

export default SocialProfile;
