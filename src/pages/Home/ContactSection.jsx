'use client'
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implementation for form submission would go here
  };

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="w-full md:w-3/5">
            <div className="mb-2">
              <div className="flex items-center">
                <div className="h-px w-8 bg-yellow-400 mr-3"></div>
                <span className="text-gray-700 uppercase text-sm tracking-wider">CONTACT US</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Do You Have
              <br /> 
              any <span className="text-emerald-500">Questions?</span>
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full"
                  required
                />
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full"
                  required
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 w-full mb-4"
                required
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-3 w-full h-32 mb-6"
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 w-full transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="w-full md:w-2/5">
            <div className="mb-8">
              <h3 className="text-2xl font-bold  text-darkGray mb-4">
                Are You Going to
                <br />
                Implement Project?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">ADDRESS</h4>
                  <p className="text-darkGray font-bold">ABC © ABC Construct</p>
                  <p className="text-darkGray font-bold">All rights reserved Copyrights 2025</p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">EMAIL</h4>
                  <p className="text-darkGray font-bold">info@construct.com</p>
                  <p className="text-darkGray font-bold">support@construct.com</p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-sm mb-1">PHONE</h4>
                  <p className="text-darkGray font-bold">123 - 456 - 789</p>
                  <p className="text-darkGray font-bold">123 - 456 - 789</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-emerald-500 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-darkGray p-2 rounded-full hover:bg-emerald-500 transition-colors">
                <Globe className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactSection;