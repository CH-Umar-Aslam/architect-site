import React from 'react';
import { Layers } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-gray-900 py-16 px-6">
      <div className="max-w-4xl xl:max-w-6xl  mx-auto ">
        {/* Header Section */}
        
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-10 bg-secondary"></div>
            <span className="text-secondary uppercase text-sm font-medium">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-emerald-400">Lorem</span>
            <span className="text-white"> impsum</span>
            <br />
            <span className="text-white">kinko Hayu</span>
          </h2>
          
          <div className="mt-6 space-y-2">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">Lorem Ipsum Kinku Hayu</span>
              </div>
            ))}
          </div>
        </div>
        
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="border border-gray-700 p-8">
              <div className="mb-4">
                <Layers className="text-secondary w-12 h-12" />
              </div>
              
              <h3 className="text-white text-xl font-medium mb-2">
                Lorem Ipsum Kinku Hayu Lorem
              </h3>
              
              <p className="text-gray-400 text-sm">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;