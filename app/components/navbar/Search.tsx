'use client';
'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';

import useSearchModal from '../../hooks/useSearchModal';
import useCountries from '../../hooks/useCountries';
import React from 'react';

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
      className="border-[1px] w-full md:w-auto py-1 md:py-2 rounded-full shadow-md hover:shadow-lg cursor-pointer bg-teal-700 flex flex-col sm:flex-row items-center justify-between"
    >
      <div className="text-xs sm:text-sm md:text-base font-bold px-2 sm:px-4 md:px-6 text-white">
        {locationLabel}
      </div>
      <div className="text-xs sm:text-sm md:text-base font-semibold px-2 sm:px-4 md:px-6 my-1 sm:my-0 border-x-[1px] flex-1 text-center text-white">
        {durationLabel}
      </div>
      <div className="text-xs sm:text-sm md:text-base pl-2 sm:pl-4 md:pl-6 pr-2 text-white flex flex-row items-center gap-1 sm:gap-2 md:gap-3">
        <div>{guestLabel}</div>
        <div className="p-1 sm:p-2 md:p-3 bg-soft-coral-500 rounded-full">
          <BiSearch className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default Search;
