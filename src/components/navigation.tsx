import React from "react";
import avatar from "../assets/avatar.png";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={avatar}
              alt="YUGAL KAUSHIK"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
