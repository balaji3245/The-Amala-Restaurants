import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-brand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <h1 className="text-2xl font-bold tracking-wider text-brand mb-1">
              THE AMALA
            </h1>
            <p className="text-[10px] tracking-widest uppercase text-white/70 mb-6">
              Restaurant & Banquets
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A luxury dining experience offering an authentic taste of diverse cuisines in an elegant, cozy ambience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500}
                    className="text-gray-400 hover:text-brand transition-colors cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white border-b border-white/10 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-brand">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-brand">11:00 AM - 11:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="leading-relaxed">
                Sonai Chowk, Ausa Ring Rd,<br/> Sona Nagar, Khadgaon,<br/> Maharashtra 413531
              </li>
              <li>
                <a href="tel:09923333989" className="hover:text-brand transition-colors">+91 99233 33989</a>
              </li>
              <li>
                <a href="mailto:info@theamala.com" className="hover:text-brand transition-colors">info@theamala.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} The Amala Restaurant & Banquets. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
