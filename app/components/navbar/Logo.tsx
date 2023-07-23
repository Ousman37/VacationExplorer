'use client';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div
        className="hidden md:block cursor-pointer text-3xl font-bold text-blue-600 tracking-wider"
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          textDecoration: 'none',
          color: '#F4A261', // Sandy Brown as the accent color
        }}
      >
        Vacation Explorer
      </div>
    </Link>
  );
};

export default Logo;

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const Logo = () => {
//   const router = useRouter();

//   return (
//     <Image
//       onClick={() => router.push('/')}
//       alt="Logo"
//       className="hidden md:block cursor-pointer"
//       height={100}
//       width={100}
//       src="/images/logo.png"
//     />
//   );
// };

// export default Logo;
