import React from 'react';
import { 
  Building, 
  Construction, 
  Ruler, 
  Workflow, 
  TrendingUp, 
  Home ,ArrowRight

} from 'lucide-react';


const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white hover:bg-gradient-to-l w-full hover:scale-[1.03] hover:bg-gradColRight py-6 px-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
    <div className="mb-4">
      <Icon className="text-primary w-10 h-10 transition-transform" />
    </div>
    <h3 className="text-xl font-semibold  text-darkGray group-hover:text-white">
      {title}
    </h3>
    <p className="text-darkGray text-pretty pb-6 pt-3  group-hover:text-white">
      {description}
    </p>
    <a href="#" className="text-primary flex items-center  overflow-hidden font-medium">
  Details
  <span className="inline-block ml-2 group-hover:translate-x-[65%]  w-full transition-transform duration-300">
    <ArrowRight className="w-5 h-5 mt-[2.5px]" />
  </span>
</a>
  </div>
);


const ServicesSection = () => {
  const services = [
    { 
      icon: Building, 
      title: 'Architectural Design', 
      description: 'Comprehensive architectural solutions tailored to your vision and needs.' 
    },
    { 
      icon: Construction, 
      title: 'Construction Management', 
      description: 'Expert project management from concept to completion.' 
    },
    { 
      icon: Ruler, 
      title: 'Structural Engineering', 
      description: 'Innovative structural designs ensuring safety and efficiency.' 
    },
    { 
      icon: Workflow, 
      title: 'Urban Planning', 
      description: 'Strategic urban development and landscape design.' 
    },
    { 
      icon: TrendingUp, 
      title: 'Sustainability Consulting', 
      description: 'Green solutions and eco-friendly design strategies.' 
    },
    { 
      icon: Home, 
      title: 'Residential Design', 
      description: 'Custom residential architecture that transforms living spaces.' 
    }
  ];

  return (
    <div className=" py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <p className="text-primary uppercase tracking-wide mb-2">What We Do</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Architecting & <br /> Construction <span className='text-primary'>
            Solutions
                </span> 
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;