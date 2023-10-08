import {
  Avatar,
  Card,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { FiUserMinus } from 'react-icons/fi';

const Feed = ({ post }) => {
  const {
    userImageUrl,
    postImageUrl,
    likes,
    comments,
    description,
    location,
    firstname,
    lastname,
    userId,
  } = post || {};

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="dark:bg-lightDark dark:text-darkText p-3 rounded-lg">
      <div className="py-1 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between rounded p-2">
        <div className="flex items-center">
          <ListItemPrefix>
            <Avatar variant="circular" alt={firstname} src={userImageUrl} />
          </ListItemPrefix>
          <div className="dark:text-darkText">
            <Typography variant="h6">{firstname + ' ' + lastname}</Typography>
            <Typography className="text-xs">{location}</Typography>
          </div>
        </div>
        <div className="w-7 h-7 bg-lightGray dark:bg-darkGray rounded-full flex items-center justify-center">
          <FiUserMinus className="dark:text-darkText" />
        </div>
      </div>
      <Typography className="my-1 text-ellipsis">
        {showFullDescription ? (
          <>
            {description}{' '}
            <span
              onClick={toggleDescription}
              className="text-[#5CD2E6] cursor-pointer hover:underline"
            >
              See less...
            </span>{' '}
          </>
        ) : (
          <>
            {description.slice(0, 70)}{' '}
            <span
              className="text-primary cursor-pointer text-[#5CD2E6] hover:underline"
              onClick={toggleDescription}
            >
              {description.length > 70 ? 'See more...' : ''}
            </span>
          </>
        )}
      </Typography>
      <img src={postImageUrl} alt="post_image" className="rounded" />
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <AiOutlineHeart />
            <Typography variant="small">
              {Object.entries(likes)?.length}
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <BiComment />
            <Typography variant="small">{comments?.length}</Typography>
          </div>
        </div>

        <div className="cursor-pointer">
          <BsShare />
        </div>
      </div>
    </Card>
  );
};

export default Feed;
