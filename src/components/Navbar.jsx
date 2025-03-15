"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0F0D0D] to-[#304646] px-4 shadow font-Archivo font-semibold">
      <div className="relative flex max-w-4xl xl:max-w-6xl mx-auto flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex text-white items-center text-2xl font-black" href="/">
          <h2>LOGO</h2>
        </Link>

        <button
          className="absolute right-0 mt-1 cursor-pointer text-xl text-white hover:text-[#0DA574] transition-colors duration-300 sm:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="animate-pulse" /> : <FaBars />}
        </button>

        {/* Mobile menu with animation */}
        <div
          aria-label="Header Navigation"
          className={`absolute z-50 right-0 left-0 top-16 sm:static sm:block transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
          }`}
        >
          <div className="bg-[#2A3C3C] border-t border-[#304646] sm:bg-transparent sm:border-0">
            <ul className="flex flex-col sm:flex-row sm:gap-x-8">
              {navLinks.map(({ name, path }) => (
                <li key={name} className="border-b border-[#304646] sm:border-b-0">
                  <Link
                    href={path}
                    className={`block py-3 px-4 sm:px-0 sm:py-0 text-white text-base hover:text-[#0DA574] transition-colors duration-300 ${
                      pathname === path 
                        ? "border-l-4 border-[#FFC631] pl-3 sm:pl-0 sm:border-l-0 sm:border-b-2 sm:border-yellow-500" 
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;