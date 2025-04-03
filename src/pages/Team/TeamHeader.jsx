import Link from 'next/link';
import React from 'react';

const TeamHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-gradColLeft to-gradColRight h-[240px] md:h-[300px] flex pt-16 md:items-center">
      <div className="w-full max-w-4xl xl:max-w-6xl   px-4 md:px-8 lg:px-16 xl:px-20 mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        {/* Line and Subtitle */}
        <div className="flex items-center mb-2">
          <div className="w-8  md:w-32 lg:w-44 h-px bg-secondary mr-2 md:mr-4"></div>
          <span className="text-white text-xs md:text-sm uppercase tracking-wider font-medium">
          BETTER THAN OTHERS
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Team</h1>

        {/* Breadcrumbs */}
        <div className="flex items-center text-xs md:text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">—</span>
          <span className="text-white">Team</span>
        </div>
      </div>
      <div className="absolute bottom-4 md:bottom-10 right-5  w-[80px] md:w-[250px] lg:w-[280px]">
      <img src="/assets/Team.svg" alt="Decorative" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default TeamHeader;
