import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col justify-center cursor-pointer relative">
            <h1 className="text-2xl font-bold tracking-tight text-brand-dark">
              The<span className="text-brand">Amala.</span>
            </h1>
            {/* Dashed underline as per FoodDash logo */}
            <div className="border-b-[3px] border-dashed border-brand w-14 mt-1"></div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-10">
            {['Home', 'Menu', 'Offers', 'Service', 'About Us'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-500 hover:text-brand-dark font-medium transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-green transition-colors shadow-sm">
              <Search className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
