'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 sticky top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-gray-900 dark:text-white text-xl">
              Mohamad Alhakim
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
            <ThemeSwitcher /> 
          </div>

          {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
                >
                <Menu size={24} />

                </button>
            <ThemeSwitcher /> 

            
            </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              About
            </a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              Projects
            </a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              Skills
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">
              Contact
            </a>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
