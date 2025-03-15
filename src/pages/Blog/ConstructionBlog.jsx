import { ArrowRight, Facebook, Globe, Instagram, Twitter } from "lucide-react";
import React from "react";

const ConstructionBlog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content - Left Column */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog Post 1 */}
            <div className="border rounded shadow">
              <img
                src="/assets/Project1.svg"
                alt="Composite materials"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="uppercase text-primary font-semibold">MATERIALS</span>
                  <span className="text-secondary font-bold text-lg ">•</span>
                  <span>AUGUST 25, 2023</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Composite Materials – Applications for the Future
                </h3>
                <p className="text-sm text-darkGray mb-6  border-b h-[100px]">
                  Non elit est et amet facilisis magna. Quis est lorem ipsum
                  dolor sit amet consectetur. Et lectus quis ipsum suspendisse
                  Non elit est et amet facilisis magna. Quis est lorem ipsum
                  dolor sit amet consectetur. 
                </p>
                <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="border rounded shadow">
              <img
                src="/assets/Project1.svg"
                alt="Construction finance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="uppercase text-primary font-semibold">MATERIALS</span>
                  <span className="text-secondary font-bold text-lg ">•</span>
                  <span>AUGUST 19, 2023</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Impact of Technology on Construction Finance
                </h3>
                <p className="text-sm text-darkGray mb-6  border-b h-[100px]">
                AI Impact Impact of Technology on Construction Finance Technology has revolutionized various industries, and the construction sector is no exception. One of the most significant transformations has been in construction
                </p>
                <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="border rounded shadow">
              <img
                src="/assets/Project1.svg"
                alt="Healthy buildings"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="uppercase text-primary font-semibold">MATERIALS</span>
                  <span className="text-secondary font-bold text-lg ">•</span>
                  <span>AUGUST 15, 2023</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  The Importance of Healthy Buildings in a Pandemic
                </h3>
                <p className="text-sm text-darkGray mb-6  border-b h-[100px]">
                  Pharetra sit amet aliquam id diam maecenas ultricies mi eget.
                  Mi in nulla posuere sollicitudin aliquam ultrices sagittis
                  orci
                  Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Maecenas
                </p>
                <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="border rounded shadow">
              <img
                src="/assets/Project1.svg"
                alt="Materials evaluation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="uppercase text-primary font-semibold">MATERIALS</span>
                  <span className="text-secondary font-bold text-lg ">•</span>
                  <span>AUGUST 10, 2023</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Technical Focus Issue of Materials Evaluation
                </h3>
                <p className="text-sm text-darkGray mb-6  border-b h-[100px]">
                  Non pulvinar neque laoreet suspendisse interdum consectetur
                  libero id faucibus. Maecenas sed enim ut sem      Non pulvinar neque laoreet suspendisse interdum consectetur
                  libero id faucibus.
                </p>
                <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Column */}
        <div className="md:w-1/3">
          {/* Search Box */}
          <div className="mb-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow border p-2 rounded-l"
              />
              <button className="bg-yellow-400 text-yellow-800 px-4 rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-8 border rounded p-4">
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-primary  mr-3"><ArrowRight className="h-4 w-4"/> </span>
                <span className="uppercase font-semibold text-primary text-sm">CATEGORY 01</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkGray mr-3"><ArrowRight className="h-4 w-4"/> </span>
                <span className="uppercase font-semibold text-sm">CATEGORY 02</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkGray mr-3"><ArrowRight className="h-4 w-4"/> </span>
                <span className="uppercase font-semibold text-sm">CATEGORY 03</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkGray mr-3"><ArrowRight className="h-4 w-4"/> </span>
                <span className="uppercase font-semibold text-sm">CATEGORY 04</span>
              </li>
              <li className="flex items-center">
                <span className="text-darkGray mr-3"><ArrowRight className="h-4 w-4"/> </span>
                <span className="uppercase font-semibold text-sm">CATEGORY 05</span>
              </li>
            </ul>
          </div>

          {/* Latest Articles Section */}
          <div className="border rounded p-4">
            <h2 className="font-bold text-xl mb-4">Latest Articles</h2>
            <div className="space-y-4">
              <div>
                <img
                  src="/assets/Project1.svg"
                  alt="Latest article"
                  className="w-full h-36 object-cover mb-2"
                />
                <h3 className="font-semibold mb-1">
                  Composite Materials - A New Form of Glass
                </h3>
                 <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Structural Calculations And Drawings
                </h3>
                 <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Tips for Choosing the Best Foundation for House Plan
                </h3>
                 <a
                  href="#"
                  className="flex items-center text-primary text-sm font-medium"
                >
                  READ NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 border mt-8">
            <h2 className="text-xl font-bold mb-4">Subscribe to our news</h2>
            <p className="text-gray-400 text-sm mb-4">
              Find out about the test days and the latest promotions of our Corporation
            </p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className=" text-darkGray border px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-secondary border border-secondary hover:bg-yellow-500 text-black px-4 py-2 text-sm font-medium transition-colors">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 text-white " />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 text-white " />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4 text-white " />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-primary transition-colors">
                <Globe className="w-4 h-4 text-white " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBlog;
