'use client';
import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      {isLoading ? <PuffLoader color="#FAA307" size={100} /> : null}
    </div>
  );
};

export default Loader;
