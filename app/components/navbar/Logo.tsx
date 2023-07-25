'use client';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div
        className="cursor-pointer font-bold tracking-wider text-xs sm:text-sm md:text-xl lg:text-3xl px-2 sm:px-3 md:px-5 lg:px-8 py-1 sm:py-3 md:py-3 lg:py-4 md:rounded-full md:shadow-md md:border-3 border-transparent"
        style={{
          fontFamily: 'Pacifico, cursive',
          textDecoration: 'none',
          backgroundColor: '#F4A261',
          color: '#000033', // Dark blue color
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)',
          border: '3px solid #F4A261',
        }}
      >
        <h1>Vacation Explorer</h1>
      </div>
    </Link>
  );
};

export default Logo;
