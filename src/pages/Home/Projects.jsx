import { MapPin } from 'lucide-react';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      location: "100 Sprinter Ct, Harves, Minneapolis(MN)",
      image: "/assets/project1.svg"
    },
    {
      id: 2,
      title: "Project 2",
      location: "100 Sprinter Ct, Harves, Minneapolis(MN)",
      image: "/assets/project2.svg"
    },
    {
      id: 3,
      title: "Project 3",
      location: "100 Sprinter Ct, Harves, Minneapolis(MN)",
      image: "/assets/project3.svg"
    },
    {
      id: 4,
      title: "Project 4",
      location: "100 Sprinter Ct, Harves, Minneapolis(MN)",
      image: "/assets/project4.svg"
    }
  ];

  return (
    <section className="bg-slate-900 min-h-[600px] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl xl:max-w-6xl   mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-gray-400 text-sm uppercase tracking-wider">WHERE WE DO</h2>
        </div>
        <h1 className="text-4xl font-bold text-white mb-12">
          Our <span className="text-emerald-400">Projects</span>
        </h1> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group  relative overflow-hidden rounded-lg">
              <div className="">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className=" bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold  border-b-2 border-opacity-20 pb-2 border-white my-2">{project.title}</h3>
                <div className="flex items-center gap-3 text-secondary text-sm">
                 <MapPin />
                  <p className='text-white'>

                  {project.location}
                  </p>
                </div>
                <button className="mt-4 text-secondary flex gap-3 items-center hover:opacity-65 transition-colors duration-200">
                  <>DETAILS</> <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;