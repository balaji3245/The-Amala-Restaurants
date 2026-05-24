import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bento-card bg-brand-dark p-12 lg:p-16 mb-16 flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Ready for a culinary journey?</h2>
            <p className="text-gray-400 font-medium">Reserve your table now and experience the extraordinary.</p>
          </div>
          <Link to="reservation" smooth={true} duration={500} className="pill bg-brand text-white shadow-lg shadow-brand/20 hover:-translate-y-1 hover:shadow-xl cursor-pointer py-4 px-8 text-lg">
            Book a Table
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-brand-dark">
                THE<span className="text-brand">AMALA</span>
              </h1>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Where culinary excellence meets sophisticated ambiance. Join us for an unforgettable dining experience.
            </p>
            <div className="flex gap-3">
              {['IN', 'FB', 'IG'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors text-brand-dark font-bold text-xs">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark tracking-wider uppercase text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><Link to="about" smooth={true} duration={500} className="hover:text-brand transition-colors cursor-pointer">Our Story</Link></li>
              <li><Link to="full-menu" smooth={true} duration={500} className="hover:text-brand transition-colors cursor-pointer">Menu</Link></li>
              <li><Link to="reservation" smooth={true} duration={500} className="hover:text-brand transition-colors cursor-pointer">Reservations</Link></li>
              <li><Link to="gallery" smooth={true} duration={500} className="hover:text-brand transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark tracking-wider uppercase text-sm mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark tracking-wider uppercase text-sm mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm font-medium mb-4">Subscribe to receive updates and exclusive deals.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-gray-50 border border-gray-100 rounded-l-full px-4 py-3 w-full focus:outline-none focus:border-brand text-sm font-bold"
              />
              <button type="submit" className="bg-brand text-white px-6 py-3 rounded-r-full font-bold text-sm uppercase tracking-wider hover:bg-brand-dark transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-bold">© 2026 The Amala Restaurant. All rights reserved.</p>
          <p className="text-gray-400 text-sm font-bold">Designed by The Amala</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
