import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              <h1 className={`text-2xl font-bold tracking-wider ${isScrolled ? 'text-brand-dark' : 'text-brand-light'}`}>
                THE AMALA
              </h1>
              <p className={`text-[10px] tracking-widest uppercase text-center ${isScrolled ? 'text-brand-dark/70' : 'text-brand-light/70'}`}>
                Restaurant & Banquets
              </p>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer text-sm font-medium transition-colors hover:text-brand ${
                    isScrolled ? 'text-brand-dark' : 'text-brand-light'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link to="reservation" smooth={true} duration={500}>
              <button className="bg-brand text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
                Book a Table
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-brand-dark' : 'text-brand-light'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.to}
                 smooth={true}
                 duration={500}
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-brand-dark font-medium text-lg w-full text-center py-2 hover:bg-brand-beige"
               >
                 {link.name}
               </Link>
            ))}
            <Link to="reservation" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-brand text-white px-8 py-3 rounded-full font-semibold mt-4 shadow-md">
                Book a Table
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
