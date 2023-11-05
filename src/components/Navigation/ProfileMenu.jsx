import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { HiMoon } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineColorLens } from 'react-icons/md';
import { VscColorMode } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import ConfirmModal from '../../ui/ConfirmModal';

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

  const { setTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
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
            className="flex items-center ml-auto capitalize gap-2 hover:bg-transparent dark:text-darkText p-0"
          >
            <Avatar
              src={user?.profileImage}
              alt="avatar"
              className="w-9 h-9 object-cover rounded-full"
            />
            <IoMdArrowDropdown
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="dark:bg-darkBg dark:text-darkText p-1 border-none dark:shadow-none">
          {profileMenuItems.map(({ label, icon }, index) => {
            return (
              <MenuItem
                key={index}
                onClick={closeMenu}
                className="flex items-center gap-2 rounded dark:hover:bg-lightDark dark:hover:text-darkText"
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
          <Menu
            placement="right-start"
            open={openMenu}
            handler={setOpenMenu}
            allowHover
            offset={15}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="flex items-center">
                <MdOutlineColorLens />
                <Typography>Appearance</Typography>
                <ChevronUpIcon
                  strokeWidth={1}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? 'rotate-90' : ''
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="space-y-0 dark:bg-darkBg dark:text-darkText border-none dark:shadow-none">
              <MenuItem
                className="flex items-center gap-3  dark:hover:bg-lightDark dark:hover:text-darkText"
                onClick={() => setTheme('dark')}
              >
                <HiMoon />
                <Typography>Dark</Typography>
              </MenuItem>

              <MenuItem
                className="flex items-center gap-3  dark:hover:bg-lightDark dark:hover:text-darkText"
                onClick={() => setTheme('light')}
              >
                <BsFillSunFill />
                <Typography>Light</Typography>
              </MenuItem>

              <MenuItem
                className="flex items-center gap-3  dark:hover:bg-lightDark dark:hover:text-darkText"
                onClick={() => setTheme('system')}
              >
                <VscColorMode />
                <Typography>System</Typography>
              </MenuItem>
            </MenuList>
          </Menu>
          <MenuItem
            onClick={() => setShowSignOutModal(true)}
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
      <ConfirmModal show={showSignOutModal} setShow={setShowSignOutModal} />
    </>
  );
};

export default ProfileMenu;
