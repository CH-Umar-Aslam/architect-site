import { HardHat, PencilRuler, ShieldCheck} from 'lucide-react';
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
                With the Help  <span className="text-primary"> of Experts</span>
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
                    <div className="md:w-12 w-6 h-6 md:h-12 rounded-full  text-primary flex items-center justify-center">
                    <ShieldCheck className='w-8 h-8   ' />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-darkGray">Planning & Initial Audit</h3>
                    <p className="text-gray-600 text-sm">Comprehensive assessment of project requirements</p>
                  </div>
                </div>
                
                {/* Service Item 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="md:w-12 w-6 h-6 md:h-12 rounded-full  text-primary flex items-center justify-center">
                    <PencilRuler  className='w-8 h-8    '/>

                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-darkGray">Technical Documentation</h3>
                    <p className="text-gray-600 text-sm">Detailed specifications and compliance documentation</p>
                  </div>
                </div>
                
                {/* Service Item 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="md:w-12 w-6 h-6 md:h-12 rounded-full  text-primary flex items-center justify-center">
                   
                    <HardHat className='w-8 h-8  ' />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-darkGray">On-site Project Management</h3>
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
                src="/assets/civil.jpg" 
                alt="Construction experts reviewing blueprints" 
                className="w-full h-[410px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;