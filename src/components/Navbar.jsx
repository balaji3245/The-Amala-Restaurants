import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Dishes', to: 'signature-dishes' },
    { name: 'Menu', to: 'full-menu' },
    { name: 'Reservation', to: 'reservation' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              <h1 className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
                THE <span className="text-brand">AMALA</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="reservation" smooth={true} duration={500} className="bg-brand text-white px-6 py-2 rounded-sm text-sm uppercase tracking-wider font-medium hover:bg-brand-dark transition-all cursor-pointer">
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-brand-dark hover:text-brand cursor-pointer border-b border-gray-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
