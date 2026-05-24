import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-light pt-16 pb-12 border-t-[3px] border-dashed border-brand/30 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1 */}
          <div>
            <div className="flex-shrink-0 flex flex-col justify-center cursor-pointer relative mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-brand-dark">
                The<span className="text-brand">Amala.</span>
              </h1>
              <div className="border-b-[3px] border-dashed border-brand w-14 mt-1"></div>
            </div>
            
            <p className="text-gray-500 text-xs mb-6 font-medium">
              The Amala ©2026 All Rights Reserved<br/><br/>
              By - The Amala
            </p>
            
            <h4 className="text-brand font-bold mb-3 text-sm">Follow Us On</h4>
            <div className="flex gap-4 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <a href="#" className="hover:text-brand transition-colors">IG</a>
              <a href="#" className="hover:text-brand transition-colors">FB</a>
              <a href="#" className="hover:text-brand transition-colors">X</a>
              <a href="#" className="hover:text-brand transition-colors">IN</a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-brand font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-brand font-bold mb-6 text-lg">Information</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Quality</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Make A Choice</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Fast Delivery</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-brand font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium">
              <li><a href="tel:09923333989" className="hover:text-brand transition-colors">+91 99233 33989</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Explore</a></li>
              <li><a href="mailto:info@theamala.com" className="hover:text-brand transition-colors">info@theamala.com</a></li>
              <li className="leading-relaxed">Sonai Chowk, Ausa Ring Rd, Sona Nagar, Khadgaon, Maharashtra 413531</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
