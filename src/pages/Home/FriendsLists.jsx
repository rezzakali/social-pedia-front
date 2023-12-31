import {
  Avatar,
  Card,
  List,
  ListItemPrefix,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { useEffect } from 'react';
import { FiUserMinus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  useAddRemoveFriendMutation,
  useGetUserFriendsQuery,
} from '../../features/user/userApi';
import { setFriends } from '../../features/user/userSlice';

const FriendsLists = ({ user, isSingleUserId }) => {
  // Select the 'friends' slice from the Redux store and extract the 'friends' data.
  const { friends } = useSelector((state) => state.friends);

  // Import the useDispatch hook to dispatch actions.
  const dispatch = useDispatch();

  // Call API using RTK Query to add-remove-friend
  const [addRemoveFriend, {}] = useAddRemoveFriendMutation();

  // Use the 'useGetUserFriendsQuery' generated by Redux Toolkit Query to fetch user's friends.
  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserFriendsQuery(user?._id);

  // Set the response data to the Redux store after successfully fetching user's friends.
  useEffect(() => {
    if (isSuccess && response) {
      dispatch(setFriends(response.data));
    }
  }, [isSuccess, response]);

  // remove friend from redux store
  const handleRemoveFrined = (_id) => {
    addRemoveFriend({ id: user?._id, friendId: _id });
  };

  return (
    <Card className="w-72 dark:bg-lightDark dark:text-darkText">
      <Typography variant="h6" className="dark:text-darkText p-3">
        Friend List
      </Typography>
      {!isLoading && !isError && friends?.length <= 0 && (
        <Typography className="ml-3">No friends</Typography>
      )}
      {isLoading && 'Loading...'}
      {!isLoading && isError && <Typography>{error?.data?.message}</Typography>}
      <List>
        {!isLoading &&
          !isError &&
          friends?.length > 0 &&
          friends.map((friend, index) => {
            const { profileImage, occupassion, firstname, lastname, _id } =
              friend;
            return (
              <div
                key={index}
                className="py-1 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between rounded p-1"
              >
                <div className="flex items-center">
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src={profileImage}
                    />
                  </ListItemPrefix>
                  <div className="dark:text-darkText">
                    <Typography variant="h6">
                      {firstname + ' ' + lastname}
                    </Typography>
                    <span className="text-xs">{occupassion}</span>
                  </div>
                </div>
                {!isSingleUserId && (
                  <Tooltip content="Remove friend" className="bg-darkBg">
                    <div
                      className="w-7 h-7 bg-lightGray dark:bg-darkGray rounded-full flex items-center justify-center cursor-pointer"
                      onClick={() => handleRemoveFrined(_id)}
                    >
                      <FiUserMinus className="text-red-500" />
                    </div>
                  </Tooltip>
                )}
              </div>
            );
          })}
      </List>
    </Card>
  );
};
export default FriendsLists;
