import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../../features/auth/authSlice';

// profile menu component
const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Inbox',
    icon: InboxArrowDownIcon,
  },
  {
    label: 'Help',
    icon: LifebuoyIcon,
  },
];

const ProfileMenu = () => {
  const { user } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();

  return (
    <Menu
      open={isMenuOpen}
      allowHover
      handler={setIsMenuOpen}
      placement="bottom-end"
    >
      <MenuHandler>
        <Button
          size="sm"
          variant="text"
          className="flex items-center ml-auto capitalize gap-2 dark:text-darkText dark:ring-darkGray dark:bg-darkGray bg-lightBlue"
        >
          {' '}
          {user?.firstname}
          <IoMdArrowDropdown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="dark:bg-darkBg dark:text-darkText p-1 border-none dark:shadow-none">
        {profileMenuItems.map(({ label, icon }, key) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded 'dark:hover:bg-darkGray dark:hover:text-darkText'
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 }`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={() => dispatch(Logout())}
          className={`flex items-center gap-2 rounded 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
        >
          <PowerIcon className="h-4 w-4 text-red-400" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
