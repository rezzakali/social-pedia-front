import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { HiMoon } from 'react-icons/hi';
import { Tooltip } from '../../MTComponents';

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
    <>
      <Tooltip
        content={theme === 'dark' ? 'Light' : 'Dark'}
        className="dark:bg-darkGray"
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
    </>
  );
};

export default ColorMode;
