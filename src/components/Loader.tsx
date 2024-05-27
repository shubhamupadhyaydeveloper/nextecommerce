import React from 'react';

const TopLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="loader h-full w-full bg-gradient-to-r from-black to-black"></div>
    </div>
  );
};

export default TopLoader;
