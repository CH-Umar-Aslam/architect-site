import { ShieldCheck } from 'lucide-react';
import React from 'react';

const ServicesHighlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="max-w-lg">
              <p className="text-gray-500 mb-1 text-sm">Technical consultancy services</p>
              <h2 className="text-3xl font-bold mb-4">
                Solving Problems<br />
                With the Help  <span className="text-emerald-500"> of Experts</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our specialized team provides innovative solutions for your construction 
                challenges. We bring decades of industry experience to every project, 
                ensuring optimal outcomes aligned with your business objectives.
              </p>
              
              <div className="space-y-4">
                {/* Service Item 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Planning & Initial Audit</h3>
                    <p className="text-gray-600 text-sm">Comprehensive assessment of project requirements</p>
                  </div>
                </div>
                
                {/* Service Item 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Technical Documentation</h3>
                    <p className="text-gray-600 text-sm">Detailed specifications and compliance documentation</p>
                  </div>
                </div>
                
                {/* Service Item 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">On-site Project Management</h3>
                    <p className="text-gray-600 text-sm">Expert oversight and coordination of construction activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/assets/engineers.svg" 
                alt="Construction experts reviewing blueprints" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;