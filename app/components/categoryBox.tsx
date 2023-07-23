'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

import queryString from 'query-string';
import React from 'react';

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // Get the current query from the search results object and update the current query accordingly.
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatesQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatesQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: '/',
        query: updatesQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
     
       ${selected ? 'border-b-neutral-800' : 'border-transparent'}
       ${selected ? 'text-neutral-800' : 'text-neutral-500'}
       `}
    >
      <Icon size={26} /> {/* Use the 'Icon' alias instead of the 'icon' prop */}
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
