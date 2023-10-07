import React, { useEffect, useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';

import { IoNotificationsSharp } from 'react-icons/io5';
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Tooltip,
  Typography,
} from '../MTComponents';
import ColorMode from './Elements/ColorMode';
import ProfileMenu from './Elements/ProfileMenu';
import SearchInput from './Elements/SearchInput';

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 inset-0 z-50 max-w-full rounded-none py-1 shadow-none bg-[#ffffff] dark:bg-darkBg border-none">
      <div className="flex items-center justify-between text-gray-900 gap-5">
        <Typography
          as="a"
          href="#"
          className="cursor-pointer py-1.5 text-3xl font-extrabold text-[#5CD2E6]"
        >
          Socialpedia
        </Typography>
        <SearchInput />
        <div className="flex items-center gap-4 dark:text-white">
          <div className="flex items-center justify-center gap-10">
            <ColorMode />
            <Tooltip content="Messages" className="dark:bg-darkGray">
              <div>
                <BiMessageDetail className="cursor-pointer" />
              </div>
            </Tooltip>
            <Tooltip content="Notifications" className="dark:bg-darkGray">
              <div>
                <IoNotificationsSharp className="cursor-pointer" />
              </div>
            </Tooltip>
            <Tooltip content="Questions" className="dark:bg-darkGray">
              <div>
                <AiFillQuestionCircle className="cursor-pointer" />
              </div>
            </Tooltip>
          </div>
          <div>
            <ProfileMenu />
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <Collapse open={openNav}>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
