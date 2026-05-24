import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-3xl pt-24 pb-12 border-t border-white/60 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8A33]/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-brand/5 backdrop-blur-md border border-brand/10 rounded-3xl p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-serif text-brand-dark mb-2">Ready for a culinary journey?</h3>
            <p className="text-gray-600 font-medium">Reserve your table now and experience the extraordinary.</p>
          </div>
          <button className="pill bg-brand text-white shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1">
            Book a Table
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-1 mb-6">
              <img src="/amala-logo.png?v=2" alt="The Amala Logo" className="h-10 w-auto object-contain object-left mix-blend-multiply" />
              <h1 className="text-xl font-bold tracking-tight leading-none text-brand-dark">
                THE<span className="text-brand">AMALA</span>
              </h1>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
              Where culinary artistry meets modern elegance. An unforgettable dining experience awaits you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-dark hover:text-brand hover:-translate-y-1 transition-all font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-dark hover:text-brand hover:-translate-y-1 transition-all font-bold text-xs">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-dark hover:text-brand hover:-translate-y-1 transition-all font-bold text-xs">
                X
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-brand-dark mb-6 tracking-wide">Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Reservation'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-brand transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/30 group-hover:bg-brand transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-brand-dark mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/30 group-hover:bg-brand transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-brand-dark mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm font-medium">123 Culinary Boulevard, <br/> Gourmet District, City 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <span className="text-gray-500 text-sm font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <span className="text-gray-500 text-sm font-medium">reservations@theamala.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} The Amala Restaurant. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-medium flex items-center gap-1">
            Crafted with <span className="text-brand">♥</span> for food lovers.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
