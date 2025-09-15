import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md font-gagalin">
      <div className="flex w-full mx-auto">

        {/* Left Side - Blue */}
        <div className="bg-blue-950 flex items-center px-4 sm:px-6 lg:px-8 h-20 w-1/2 text-white">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="size-20 mr-3" />
            <div className="text-5xl font-light leading-tight">
              <span>octopus cleaning</span>
              
            </div>
          </div>
        </div>

        {/* Right Side */}
<div className="relative w-1/2">
  <div className="bg-blue-950 h-20 flex justify-left items-center px-4 sm:px-6 lg:px-8  overflow-hidden">
    {/* Desktop Links */}
    <div className="hidden md:flex space-x-4">
      {["Home", "Onze Diensten", "Reviews", "Contact"].map((item, index) => (
        <a
          key={index}
          href={`/#${item.replace(/\s+/g, "").toLowerCase()}`} // generate href
          className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition text-gray-800 font-semibold"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none text-2xl"
      >
        {isOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>
</div>
</div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
