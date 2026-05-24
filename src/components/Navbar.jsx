import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Calendar, ShoppingCart } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
          
          <div className="flex-shrink-0 cursor-pointer flex items-center">
            <Link to="home" smooth={true} duration={500} className="flex flex-col items-center gap-1">
              <img src="/amala-logo.png?v=2" alt="The Amala Logo" className="h-8 w-auto object-contain drop-shadow-sm" />
              <h1 className={`text-base font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-dark' : 'text-brand-dark drop-shadow-sm'}`}>
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

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center justify-end">
              <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${searchOpen ? 'w-40 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-brand-dark"
                />
              </div>
              <button onClick={() => setSearchOpen(!searchOpen)} className="text-brand-dark hover:text-brand transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/50 z-10">
                {searchOpen ? <X size={20} /> : <Search size={20} />}
              </button>
              <button className="text-brand-dark hover:text-brand transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/50 z-10 relative ml-1">
                <ShoppingCart size={20} />
                <span className="absolute top-1.5 right-1.5 bg-brand text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
            <Link to="reservation" smooth={true} duration={500} className={`bg-brand text-white hover:bg-brand-dark cursor-pointer shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden uppercase tracking-wide text-sm ${searchOpen ? 'w-10 h-10 p-0 rounded-full' : 'w-[140px] px-4 py-2 rounded-full'}`}>
              {searchOpen ? <Calendar size={18} className="shrink-0" /> : <span className="whitespace-nowrap font-bold">Book Table</span>}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${searchOpen ? 'w-32 opacity-100 mr-1' : 'w-0 opacity-0'}`}>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-3 py-1.5 text-xs focus:outline-none focus:border-brand text-brand-dark"
              />
            </div>
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-brand-dark hover:text-brand transition-colors p-2">
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button className="text-brand-dark hover:text-brand transition-colors p-2 relative">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 bg-brand text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark p-2">
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
