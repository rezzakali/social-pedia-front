import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdClose } from 'react-icons/md';

const SearchInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="sm:w-10 md:w-96 lg:w-96 gap-2">
      <Input
        size="md"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="dark:bg-darkGray dark:text-darkText rounded-full border-none ring-1 ring-lightGray dark:ring-darkGray bg-gray-400/50 pl-4"
        labelProps={{
          className: 'hidden',
        }}
        icon={
          value ? (
            <MdClose className="cursor-pointer" onClick={() => setValue('')} />
          ) : (
            <GoSearch />
          )
        }
      />
    </div>
  );
};

export default SearchInput;
