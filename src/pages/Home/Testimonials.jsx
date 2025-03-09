'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare",
    author: "Khush Ahmed",
    position: "IB• MARKAZ",
    image: "/window.svg"
  },
  {
    text: "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sed augue lacus viverra vitae congue eu consequat ac felis donec.",
    author: "Sarah Johnson",
    position: "CEO • NEXTECH",
    image: "/window.svg"
  },
  {
    text: "Faucibus ornare suspendisse sed nisi lacus sed. Pellentesque sit amet porttitor eget dolor morbi non arcu risus quis.",
    author: "Michael Chen",
    position: "CTO • DATAFLOW",
    image: "/window.svg"
  },
  {
    text: "Donec massa sapien faucibus et molestie ac feugiat sed lectus. Enim facilisis gravida neque convallis a cras semper auctor.",
    author: "Emma Wilson",
    position: "VP • CLOUDRISE",
    image: "/window.svg"
  },
  {
    text: "Ultricies tristique nulla aliquet enim. Sit amet dictum sit amet justo donec enim diam vulputate.",
    author: "James Roberts",
    position: "FOUNDER • VELOCE",
    image: "/window.svg"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className=" max-w-4xl xl:max-w-6xl   mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 max-w-lg">
            <span className="block h-1 w-20 bg-secondary mb-6"></span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-black">What </span>
              <span className="text-primary">Our Client</span>
              <br />
              <span className="text-black">Say About Us</span>
            </h2>
            <p className="text-gray-700 mb-8">
              Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dui id ornare arcu odio. Sodales ut eu sem integer vitae justo eget magna. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
            </p>
            <button className="bg-secondary hover:bg-opacity-85 text-black font-medium py-3 px-8 transition-colors">
              CONTACT US
            </button>
          </div>

          {/* Right Column - Testimonial Slider */}
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="relative bg-white p-8 shadow-lg border border-gray-100 rounded-sm">
              <p className="text-gray-700 mb-6">
                {testimonials[current].text}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[current].position}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? 'bg-black border-2 border-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;