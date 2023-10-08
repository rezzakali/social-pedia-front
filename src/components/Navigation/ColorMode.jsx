import { Tooltip } from '@material-tailwind/react';
import { useTheme } from 'next-themes';
import React, { Fragment, useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { HiMoon } from 'react-icons/hi';

const ColorMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <Tooltip
        content={theme === 'dark' ? 'Light' : 'Dark'}
        className="bg-darkGray"
      >
        <div>
          {theme === 'dark' ? (
            <BsFillSunFill
              className="cursor-pointer"
              onClick={() => setTheme('light')}
            />
          ) : (
            <HiMoon
              className="cursor-pointer"
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </Tooltip>
    </Fragment>
  );
};

export default ColorMode;
