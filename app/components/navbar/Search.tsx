'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '../../hooks/useSearchModal';
import useCountries from '../../hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);
  return (
    <div
      onClick={searchModal.onOpen}
      className="cursor-pointer font-bold tracking-wider text-xs sm:text-sm md:text-xl lg:text-4xl px-2 sm:px-3 md:px-5 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 rounded-none md:rounded-full shadow-md hover:shadow-lg border-3 border-transparent flex flex-col md:flex-row items-center justify-between bg-teal-700 mx-auto sm:mx-0" // Added centering for smaller screens
      style={{
        fontFamily: 'Helvetica, sans-serif',
        textDecoration: 'none',
        color: '#000033',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="text-xxxs sm:text-xs md:text-sm lg:text-base font-bold px-0.5 sm:px-2 md:px-4 lg:px-6 text-white">
        {locationLabel}
      </div>
      <div className="text-xxxs sm:text-xs md:text-sm lg:text-base font-semibold px-0.5 sm:px-2 md:px-4 lg:px-6 my-0.5 md:my-0 border-x-[1px] flex-1 text-center text-white">
        {durationLabel}
      </div>
      <div className="text-xxxs sm:text-xs md:text-sm lg:text-base pl-0.5 sm:pl-2 md:pl-4 lg:pl-6 pr-2 text-white flex flex-row items-center gap-0.5 sm:gap-2 md:gap-3">
        <div>{guestLabel}</div>
        <div className="p-0.5 sm:p-2 md:p-3 bg-soft-coral-500 rounded-full flex flex-row items-center">
          <span>Search</span> {/* Added label */}
          <BiSearch className="w-2.5  md:w-5 lg:w-6 h-2.5 sm:h-4 md:h-5 lg:h-6" />
        </div>
      </div>
    </div>
  );
};

export default Search;
//   return (
//     <div
//       onClick={searchModal.onOpen}
//       className="cursor-pointer font-bold tracking-wider text-xs sm:text-sm md:text-xl lg:text-3xl px-2 sm:px-3 md:px-5 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 rounded-none md:rounded-full shadow-md hover:shadow-lg border-3 border-transparent flex flex-col md:flex-row items-center justify-between bg-teal-700"
//       style={{
//         fontFamily: 'Helvetica, sans-serif',
//         textDecoration: 'none',
//         color: '#000033', // Dark blue color
//         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//         boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)',
//       }}
//     >
//       <div className="text-xxxs sm:text-xs md:text-sm lg:text-base font-bold px-0.5 sm:px-2 md:px-4 lg:px-6 text-white">
//         {locationLabel}
//       </div>
//       <div className="text-xxxs sm:text-xs md:text-sm lg:text-base font-semibold px-0.5 sm:px-2 md:px-4 lg:px-6 my-0.5 md:my-0 border-x-[1px] flex-1 text-center text-white">
//         {durationLabel}
//       </div>
//       <div className="text-xxxs sm:text-xs md:text-sm lg:text-base pl-0.5 sm:pl-2 md:pl-4 lg:pl-6 pr-2 text-white flex flex-row items-center gap-0.5 sm:gap-2 md:gap-3">
//         <div>{guestLabel}</div>
//         <div className="p-0.5 sm:p-2 md:p-3 bg-soft-coral-500 rounded-full">
//           <BiSearch className="w-2.5  md:w-5 lg:w-6 h-2.5 sm:h-4 md:h-5 lg:h-6" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
