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
    { name: 'Menu', to: 'full-menu' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 top-0 pt-4 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-5xl mx-auto rounded-full transition-all duration-500 ${isScrolled ? 'glass py-3 px-6' : 'bg-transparent py-4 px-4'}`}>
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              <h1 className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark drop-shadow-sm'}`}>
                THE<span className="text-brand">AMALA</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-1 bg-white/40 backdrop-blur-md rounded-full p-1 border border-white/40 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full cursor-pointer transition-all ${isScrolled ? 'text-brand-dark hover:bg-white' : 'text-brand-dark hover:bg-white drop-shadow-sm'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="reservation" smooth={true} duration={500} className="pill bg-brand text-white hover:bg-brand-dark cursor-pointer shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40">
              Book Table
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-brand-dark hover:text-brand cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link to="reservation" smooth={true} duration={500} className="pill bg-brand text-white text-center mt-4 cursor-pointer">
              Book Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
