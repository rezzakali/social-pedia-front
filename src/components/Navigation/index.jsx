import { Badge, Navbar, Tooltip, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { IoNotificationsSharp } from 'react-icons/io5';
import ColorMode from './ColorMode';
import ProfileMenu from './ProfileMenu';
import SearchInput from './SearchInput';

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 inset-0 z-50 max-w-full rounded-none shadow-none dark:bg-lightDark border-none p-3">
      <div className="flex items-center justify-between text-gray-900 gap-5">
        <Typography
          as="a"
          href="#"
          className="cursor-pointer py-1.5 font-extrabold text-[#5CD2E6] sm:text-sm md:text-3xl lg:text-3xl"
        >
          Socialpedia
        </Typography>
        <SearchInput />
        <div className="flex items-center gap-4 dark:text-white">
          <div className="items-center justify-center gap-10 hidden lg:flex">
            <ColorMode />
            <Tooltip content="Messages" className="bg-darkGray">
              <div>
                <BiMessageDetail className="cursor-pointer" />
              </div>
            </Tooltip>
            <Tooltip content="Notifications" className="bg-darkGray">
              <Badge content={5}>
                <IoNotificationsSharp className="cursor-pointer" />
              </Badge>
            </Tooltip>
            <Tooltip content="Questions" className="bg-darkGray">
              <div>
                <AiFillQuestionCircle className="cursor-pointer" />
              </div>
            </Tooltip>
          </div>
          <ProfileMenu />
        </div>
      </div>
      {/* <Collapse open={openNav}>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </Collapse> */}
    </Navbar>
  );
};

export default Navigation;
