import React from 'react';

const HeroSection = () => {
  return (
    <div style={{
        backgroundImage: 'url("/assets/heroBG.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }} className="relative flex font-Archivo flex-col overflow-hidden justify-center md:justify-start md:flex-row min-h-[calc(100vh-64px)]">
      {/* Left Text Column */}
      <div className="max-w-xl   p-6 md:ml-[8rem] flex flex-col  md:justify-center  text-white">
        <p className="text-sm z-10 uppercase tracking-wide  text-secondary">
          Lorem Ipsum
        </p>
        <div className='relative'> 

        <p className=' border-b-[1px] border-secondary  absolute  w-full overflow-hidden -top-3 -left-[33.3rem] bg-secondary'></p>
        </div>
        <h1 className="text-4xl md:text-5xl leading-[190%] font-bold mb-6">
          Loremoral Exceeding Lorem Expectations
        </h1>
        <p className="text-lg font-Roboto mb-8 text-gray-300">
          Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities.
        </p>
        <button className="bg-secondary text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
          Consult Now
        </button>
      </div>

      {/* Right Background Image Column */}
      {/* <div className="w-full  bg-cover bg-center" style={{
        backgroundImage: 'url("/assets/heroBG.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}> */}
        {/* Optional: Add decorative overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div> */}
      {/* </div> */}
    </div>
  );
};

export default HeroSection;