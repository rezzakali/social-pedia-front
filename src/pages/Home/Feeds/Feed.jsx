import {
  Avatar,
  Card,
  ListItemPrefix,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillHeart } from 'react-icons/ai';
import { BiComment, BiLike } from 'react-icons/bi';
import { FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { PiShareFatLight } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLikeAPostMutation } from '../../../features/post/postApi';
import { setPostId } from '../../../features/post/postSlice';
import { useAddRemoveFriendMutation } from '../../../features/user/userApi';
import AddComment from './AddComment';
import CommentsModal from './Modals/CommentsModal';

const Feed = ({ post, isSingleUserId }) => {
  // State for comments
  const [showAddCommentInput, setShowAddCommentInput] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  // State to control whether full description is shown or not.
  const [showFullDescription, setShowFullDescription] = useState(false);
  // Select the 'friends' slice from the Redux store and extract the 'friends' data.
  const { friends } = useSelector((state) => state.friends);
  // Initialize the 'likeAPost' mutation with response and error handling.
  const [likeAPost, { data: response, isSuccess, isError, error }] =
    useLikeAPostMutation();
  // Initialize the 'addRemoveFriend' mutation with success handling.
  const [addRemoveFriend, {}] = useAddRemoveFriendMutation();

  // Destructure properties from the 'post' object, with default empty object.
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
    _id,
  } = post || {};

  const dispatch = useDispatch();

  // Select the 'user' from the Redux store.
  const { user } = useSelector((state) => state.auth);
  const isLike = likes?.find((like) => like.userId === user._id);

  const isLikedStatus = !!isLike;
  const [isLiked, setIsLiked] = useState(isLikedStatus);
  // Update the state based on the friend status
  useEffect(() => {
    setIsLiked(isLikedStatus);
  }, [isLikedStatus]);

  // Check if the user is a friend based on 'friends' data and 'userId'.
  const isFrien = friends?.find((friend) => friend._id === userId);
  // Convert to a boolean
  const isFriendStatus = !!isFrien;

  // Use the state to manage the friend status without causing re-renders
  const [isFriend, setIsFriend] = useState(isFriendStatus);

  // Update the state based on the friend status
  useEffect(() => {
    setIsFriend(isFriendStatus);
  }, [isFriendStatus]);

  // Function to toggle the description visibility.
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // handle like to a post
  const handleLike = () => {
    likeAPost({
      postId: _id,
      userId: user?._id,
    });
  };

  // Handle errors from 'likeAPost' mutation by displaying a toast message.
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error, response, isSuccess]);

  // Function to send an 'addRemoveFriend' request.
  const addRemoveFriendRequestHandler = () => {
    addRemoveFriend({ id: user?._id, friendId: userId });
  };

  // comment handler
  const commentHandler = () => {
    setShowAddCommentInput(!showAddCommentInput);
    dispatch(setPostId(post?._id));
  };

  return (
    <>
      <Card className="dark:bg-lightDark dark:text-darkText p-3 rounded-lg">
        <div className="py-1 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between rounded p-2">
          <div className="flex items-center">
            <ListItemPrefix>
              {user?._id === userId ? (
                <Avatar variant="circular" alt={firstname} src={userImageUrl} />
              ) : (
                <Link to={`/home/${userId}`}>
                  <Avatar
                    variant="circular"
                    alt={firstname}
                    src={userImageUrl}
                  />
                </Link>
              )}
            </ListItemPrefix>
            <div className="dark:text-darkText">
              <Typography variant="h6">{firstname + ' ' + lastname}</Typography>
              <Typography className="text-xs">{location}</Typography>
            </div>
          </div>
          {user?._id !== userId && !isSingleUserId && (
            <Tooltip
              content={`${isFriend ? 'Remove friend' : 'Add friend'}`}
              className="bg-darkBg"
            >
              <div
                className="w-7 h-7 bg-lightGray dark:bg-darkGray rounded-full flex items-center justify-center cursor-pointer"
                onClick={addRemoveFriendRequestHandler}
              >
                {isFriend ? (
                  <FiUserMinus
                    className={`${isFriend ? 'text-red-500' : ''}`}
                  />
                ) : (
                  <FiUserPlus
                    className={`${!isFriend ? 'text-green-500' : ''}`}
                  />
                )}
              </div>
            </Tooltip>
          )}
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
              {description?.slice(0, 70)}{' '}
              <span
                className="text-primary cursor-pointer text-[#5CD2E6] hover:underline"
                onClick={toggleDescription}
              >
                {description?.length > 70 ? 'See more...' : ''}
              </span>
            </>
          )}
        </Typography>
        <img src={postImageUrl} alt="post_image" className="rounded" />

        <div className="relative">
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 cursor-pointer">
              {isLiked ? (
                <Tooltip
                  className="bg-darkGray"
                  content={likes.slice(0, 7).map((like, index) => {
                    const { name } = like;
                    return (
                      <Typography key={index} className="capitalize">
                        {' '}
                        {name}{' '}
                      </Typography>
                    );
                  })}
                >
                  <div className="flex items-center gap-1">
                    <AiFillHeart className="text-red-500" />
                    <Typography variant="small">{likes?.length}</Typography>
                  </div>
                </Tooltip>
              ) : (
                <>
                  {likes?.length > 0 && (
                    <div className="w-full flex flex-wrap items-center justify-start">
                      {likes.slice(0, 2).map((like, index) => {
                        const { name } = like;
                        return (
                          <Typography
                            key={index}
                            className="capitalize text-sm"
                          >
                            {' '}
                            {index !== 0 && ', '} {name}{' '}
                          </Typography>
                        );
                      })}
                      {likes.length > 2 && (
                        <Typography className="text-sm">
                          &nbsp; and {likes.length - 2} others
                        </Typography>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
            {/* ################### COMMENTS LENGTH ################# */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                dispatch(setPostId(post?._id));
                setShowCommentsModal(true);
              }}
            >
              <Typography
                variant="small"
                className="hover:underline cursor-pointer"
              >
                {comments?.length}
              </Typography>
              <BiComment />
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex flex-1 flex-wrap items-center justify-between mb-2">
            {/* ################### LIKE ######################### */}
            <div
              className={`flex items-center gap-1 hover:bg-lightGray dark:hover:bg-darkGray sm:px-1 md:px-4 lg:px-5 rounded cursor-pointer ${
                isLiked && 'text-[#5CD2E6]'
              }`}
              onClick={handleLike}
            >
              <BiLike className={`${isLiked && 'font-semibold'}`} />
              <Typography className={`${isLiked && 'font-semibold'}`}>
                Like
              </Typography>
            </div>
            {/* ####################### COMMENT ################### */}
            <div className="flex items-center gap-1 hover:bg-lightGray dark:hover:bg-darkGray sm:px-1 md:px-4 lg:px-5 rounded cursor-pointer">
              <BiComment />
              <Typography onClick={commentHandler}>Comments</Typography>
            </div>
            {/* ################## SHARE ###################### */}
            <div className="flex items-center gap-1 hover:bg-lightGray dark:hover:bg-darkGray sm:px-1 md:px-4 lg:px-5 rounded cursor-pointer">
              <PiShareFatLight />
              <Typography>Share</Typography>
            </div>
          </div>
          {/* ########### COMMENTS SECTION ################ */}
          {showAddCommentInput && <AddComment />}
        </div>
      </Card>
      {/* ########## COMMENTS MODAL ################ */}
      {showCommentsModal && (
        <CommentsModal
          show={showCommentsModal}
          setShow={setShowCommentsModal}
          comments={comments}
        />
      )}
    </>
  );
};

export default Feed;
