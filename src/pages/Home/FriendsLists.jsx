import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import { FiUserMinus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useGetUserFriendsQuery } from '../../features/user/userApi';

const FriendsLists = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    data: friends,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserFriendsQuery(user?._id);

  return (
    <Card className="w-72 dark:bg-lightDark dark:text-darkText">
      <Typography variant="h6" className="dark:text-darkText p-3">
        Friend List
      </Typography>
      {!isLoading && !isError && friends?.length <= 0 && (
        <Typography>No friends</Typography>
      )}
      {isLoading && 'Loading...'}
      {!isLoading && isError && <Typography>{error?.data?.message}</Typography>}
      <List>
        {!isLoading &&
          !isError &&
          friends?.length > 0 &&
          friends.map((friend, index) => {
            const { profileImage, occupassion, firstname, lastname } = friend;
            return (
              <ListItem
                key={index}
                className="py-1 dark:hover:bg-darkGray dark:hover:text-darkText flex items-center justify-between"
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
                <div className="w-7 h-7 bg-lightGray dark:bg-darkGray rounded-full flex items-center justify-center">
                  <FiUserMinus className="dark:text-darkText" />
                </div>
              </ListItem>
            );
          })}
      </List>
    </Card>
  );
};
export default FriendsLists;
