import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Main content of Navbar: Logo, Desktop Nav, Mobile Toggle */}
      <div className="container mx-auto pl-4 pr-6 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={scrollToTop}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <img src={logo} alt="Roamigo Logo" className="h-16 sm:h-20 max-w-[150px] w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="text-lg text-gray-600 hover:text-green-600 transition-colors duration-300">Services</a>
          <a href="#about" className="text-lg text-gray-600 hover:text-green-600 transition-colors duration-300">About</a>
          <a href="#contact" className="text-lg text-gray-600 hover:text-green-600 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-green-600 focus:outline-none z-50 flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - positioned relative to the nav (fixed) element */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-48 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
        style={{ top: '100%' }}
      >
        <div className="py-4 px-4 space-y-4">
          <a 
            href="#services" 
            className="block text-lg text-gray-600 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="block text-lg text-gray-600 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block text-lg text-gray-600 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 