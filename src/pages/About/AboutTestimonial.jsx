'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.",
      author: "Maleeha Noor",
      position: "DOCTOR",
      rating: 5
    },
    {
      id: 2,
      text: "Commodo quis imperdiet massa tincidunt nunc. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt.",
      author: "Muhammad Ali",
      position: "BUSINESS ANALYST",
      rating: 5
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vulputate velit eu ligula consectetur hendrerit.",
      author: "Sarah Johnson",
      position: "MARKETING DIRECTOR",
      rating: 5
    },
    {
      id: 4,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      author: "David Chen",
      position: "SOFTWARE ENGINEER",
      rating: 5
    },
    {
      id: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
      author: "Emily Rodriguez",
      position: "PROJECT MANAGER",
      rating: 5
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerView : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl  mx-auto md:py-16 px-4 bg-white">
      <div className="">
        <div className=" mb-8 md:mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">OUR REVIEWS</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            <span className="text-darkGray">What </span>
            <span className="text-primary">Our Clients</span>
            <span className="text-darkGray"> Say</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {testimonials.slice(activeIndex, activeIndex + itemsPerView).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm flex-1 mb-4 md:mb-0"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full overflow-hidden mr-3 md:mr-4">
                    <img 
                      src={`/assets/Project1.svg`} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base text-darkGray">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8">
            {testimonials.slice(0, testimonials.length - (itemsPerView - 1)).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-5 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-5 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-5 darkGray md:h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;