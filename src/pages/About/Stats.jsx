import React from 'react';

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-gradColLeft to-gradColRight text-white py-16 ">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl  mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Heading and Description */}
          <div>
            <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="h-px w-8 bg-secondary mr-3"></div>
              <span className="text-gray-300 uppercase text-sm tracking-wider font-medium">What We DO</span>
            </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Building The Future<br />on a <span className="text-primary">Foundation</span><br />of <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Risus commodo viverra maecenas accumsan lacus vel. 
                Integer viverra non diam purus feugiat quis amet cursus. 
                Commodo interdum sapien vestibulum elit maecenas odio 
                cursus interdum tempus risus commodo.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-4">
            {/* Stat 1 */}
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">99%</h3>
              <p className="text-gray-300 text-sm">
                Building Control<br />
                Approval Rate
              </p>
            </div>

            {/* Stat 2 */}
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">320 <span className="">+</span></h3>
              <p className="text-gray-300 text-sm">
                Active Projects in<br />
                Construction Management
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-1">200 <span className="">+</span></h3>
              <p className="text-gray-300 text-sm">
                Completed Projects<br />
                Every Year
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-1">4,253</h3>
              <p className="text-gray-300 text-sm">
                Million Euros Turnover<br />
                in 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;