import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdClose } from 'react-icons/md';

const SearchInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative transition-width">
      <input
        type="text"
        placeholder={'Search'}
        className="p-1 pl-5 pr-8 w-full border rounded-full dark:text-darkText dark:border-none focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400">
        {value ? (
          <MdClose className="cursor-pointer" onClick={() => setValue('')} />
        ) : (
          <GoSearch className="w-4 h-4" />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
