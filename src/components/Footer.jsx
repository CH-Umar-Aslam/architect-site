import React from 'react';
import { Facebook, Instagram, Twitter, Globe, Phone, MapPin } from 'lucide-react';
import { FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gradColLeft to-gradColRight text-white py-12">
      <div className="max-w-4xl xl:max-w-6xl   mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">LOGO</h2>
            <p className="text-lightGray text-sm mb-4">
              Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor dignissim convallis aenean et tortor at risus viverra
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contacts</h2>
            
            <div className="flex items-start mb-3">
              <Phone className="w-4 h-4 text-secondary mt-1 mr-2" />
              <div>
                <p className="text-gray-400">123 - 456 - 789</p>
                <p className="text-gray-400">123 - 456 - 789</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-4 h-4 text-secondary mt-1 mr-2" />
              <p className="text-gray-400">ABC Hurra, ABC Hurea</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lightGray flex items-center gap-2 hover:text-primary  transition-colors">
                  <FaChevronRight className="text-secondary h-3 w-3  "  /> <p> ABOUT </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-lightGray flex items-center gap-2  hover:text-primary  transition-colors">
                  <FaChevronRight className="text-secondary h-3 w-3  " /> <p> SERVICES </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-lightGray flex items-center gap-2 hover:text-primary  transition-colors">
                  <FaChevronRight className="text-secondary h-3 w-3  " /> <p> PROJECTS </p>
                </a>
              </li>
              <li>
                <a href="#" className="text-lightGray flex items-center gap-2 hover:text-primary  transition-colors">
                  <FaChevronRight className="text-secondary h-3 w-3  " /> <p> SERVICES </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-bold mb-4">Subscribe to our news</h2>
            <p className="text-lightGray text-sm mb-4">
              Find out about the test days and the latest promotions of our Corporation
            </p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-secondary hover:bg-yellow-500 text-black px-4 py-2 text-sm font-medium transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lightGray text-sm">
                ABC © ABC Construct
                <br />
                All rights reserved Copyrights 2025
              </p>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4 text-darkGray" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 text-darkGray" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4 text-darkGray" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary transition-colors">
                <Globe className="w-4 h-4 text-darkGray" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;