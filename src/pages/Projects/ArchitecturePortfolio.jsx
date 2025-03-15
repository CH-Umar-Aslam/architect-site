'use client'
import React, { useState } from 'react';

const ArchitecturePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape'];
  
  const projects = [
    { id: '01', title: 'Project 01', image: '/assets/Project3.svg', category: 'Residential' },
    { id: '02', title: 'Project 02', image: '/assets/Project3.svg', category: 'Residential' },
    { id: '03', title: 'Project 03', image: '/assets/Project3.svg', category: 'Commercial' },
    { id: '04', title: 'Project 04', image: '/assets/Project3.svg', category: 'Interior' },
    { id: '05', title: 'Project 05', image: '/assets/Project3.svg', category: 'Residential' },
    { id: '06', title: 'Project 06', image: '/assets/Project3.svg', category: 'Landscape' },
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Filter Menu */}
      <div className="flex flex-wrap items-center gap-2 my-8 border max-w-xl mx-auto ">
        <div className="bg-darkGray text-white px-4 py-2 font-medium">Filter</div>
        {filters.map(filter => (
          <button
            key={filter}
            className={`px-4 py-2 text-sm ${activeFilter === filter ? 'text-primary font-medium' : 'text-gray-600'}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col border border-gray-200">
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <h3 className="font-medium">Project {project.id}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{project.category}</span>
                <a href="#" className="text-xs text-teal-500 hover:underline">View More →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitecturePortfolio;