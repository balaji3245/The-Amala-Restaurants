import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex-shrink-0 cursor-pointer mb-6">
              <Link to="home" smooth={true} duration={500}>
                <h1 className="text-3xl font-serif font-bold tracking-wider text-white">
                  THE <span className="text-brand-accent">AMALA</span>
                </h1>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Where culinary excellence meets sophisticated ambiance. Join us for an unforgettable dining experience that celebrates the art of food.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                <span className="text-sm font-bold">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                <span className="text-sm font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                <span className="text-sm font-bold">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="about" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Our Story</Link></li>
              <li><Link to="full-menu" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Menu</Link></li>
              <li><Link to="reservation" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Reservations</Link></li>
              <li><Link to="gallery" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-accent">Information</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-accent">Newsletter</h4>
            <p className="text-gray-400 text-sm font-light mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full focus:outline-none text-sm text-white placeholder-gray-500 font-light"
              />
              <button type="submit" className="text-brand-accent uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">© 2026 The Amala Restaurant. All rights reserved.</p>
          <p className="text-gray-500 text-sm font-light">Designed by The Amala</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
