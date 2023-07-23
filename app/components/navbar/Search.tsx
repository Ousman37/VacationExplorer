'use client';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer bg-teal-400">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-bold px-6 text-white">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center text-white">
          {' '}
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-white flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-soft-coral-500 rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
