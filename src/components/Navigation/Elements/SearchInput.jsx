import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import { Input } from '../../MTComponents';

const SearchInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="w-96 gap-2">
      <Input
        size="md"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="dark:bg-darkGray dark:text-darkText rounded-full ring-0 border-none dark:ring-darkGray bg-lightBlue pl-4"
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
