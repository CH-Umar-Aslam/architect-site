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
    <div className=" bg-gradient-to-r from-[#0F0D0D] to-[#304646]  px-4  shadow font-Archivo font-semibold">
      <div className="relative  flex max-w-4xl xl:max-w-6xl  mx-auto flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex text-white items-center text-2xl font-black" href="/">
         <h2>LOGO</h2>
          
        </Link>

        <button
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          aria-label="Header Navigation"
          className={`absolute right-0 mt-1 sm:static sm:block ${
            isOpen ? "block" : "hidden"
          } pl-2 py-6 sm:py-0`}
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className={` text-white text-base text hover:text-green-600 ${
                    pathname === path ? "border-b-2 border-yellow-500 " : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
