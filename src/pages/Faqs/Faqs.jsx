'use client'
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: 'What is a Structural Engineer?',
      answer: 'A structural engineer is a professional who specializes in analyzing, designing, and ensuring the structural integrity of buildings and infrastructure. They work with architects to ensure buildings are safe and can withstand various loads and environmental conditions.'
    },
    {
      question: 'Where is Company Located?',
      answer: 'Our company is headquartered in downtown with offices in major cities. We serve clients nationwide and have project experience across multiple regions.'
    },
    {
      question: 'How Long Does It Take to Build a House?',
      answer: 'The time required to build a house typically ranges from 6 to 12 months, depending on size, complexity, weather conditions, permit processes, and material availability. Custom homes generally take longer than production homes.'
    },
    {
      question: 'What Is a General Contractor?',
      answer: 'A general contractor is the primary contractor responsible for overseeing the day-to-day activities of a construction project. They coordinate all subcontractors, manage schedules, ensure quality, and serve as the main point of contact for clients during construction.'
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl lg:max-5-xl xl:max-w-6xl  mx-auto  px-6 ">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Left Section */}
          <div className="w-full md:w-1/3">
            <div className="mb-2">
              <div className="flex items-center">
                <div className="h-[4px] w-8 bg-secondary  mr-3"></div>
                <span className="text-black uppercase text-sm tracking-wider">DEALING WITH YOUR WORRIES</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              If Your Question Is <br />
              Not Here <span className="text-primary">Contact Us</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus
            </p>
            
            <button className="bg-secondary hover:bg-opacity-80 text-black font-medium py-3 px-8 transition-colors">
              CONTACT US
            </button>
          </div>
          
          {/* Right Section - FAQ Accordion */}
          <div className="w-full md:w-2/3">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`border-b ${openIndex === index ? 'border-primary border-2' : 'border-gray-200'} transition-all duration-300`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`font-semibold transition-transform delay-300 ${openIndex === index ? "text-primary": "text-black"} `}>{item.question}</span>
                    {openIndex === index ? 
            <Minus className="h-5 w-5 text-primary font-extrabold" /> : 
<Plus className="h-5 w-5 text-black font-extrabold" />
                    }
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-2 px-6 text-darkGray">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQSection;