'use client';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div
        className="cursor-pointer font-bold tracking-wider text-xs sm:text-sm md:text-xl lg:text-3xl px-2 sm:px-3 md:px-5 lg:px-8 py-1 sm:py-3 md:py-3 lg:py-4 "
        style={{
          fontFamily: 'Pacifico, cursive',
          textDecoration: 'none',
          backgroundColor: '#FFFFFF', // Set background color to white
          color: '#000033', // Dark blue color
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Shadow effect
        }}
      >
        <h1>Vacation Explorer</h1>
      </div>
    </Link>
  );
};

export default Logo;
