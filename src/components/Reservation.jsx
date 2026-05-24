import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          <div className="bg-brand-dark/80 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden backdrop-blur-md border-r border-white/10">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Book a Table</h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight font-serif">Make a Reservation</h2>
              <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                Experience dining at its finest. Whether it's a romantic dinner for two or a corporate gathering, we ensure an unforgettable experience.
              </p>
              <div className="space-y-4 md:space-y-6 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Mon - Fri</span> 
                  <span className="font-bold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Sat - Sun</span> 
                  <span className="font-bold">10:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 glass-heavy">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">Name</label>
                <input type="text" className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-6 py-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-bold text-brand-dark" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">Phone</label>
                <input type="tel" className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-6 py-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-bold text-brand-dark" placeholder="Your Phone" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">Date</label>
                <input type="date" className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-6 py-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-bold text-brand-dark" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">Time</label>
                <input type="time" className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-6 py-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-bold text-brand-dark" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-4">Guests</label>
                <select className="w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm rounded-full px-6 py-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-bold text-brand-dark appearance-none">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="pill bg-brand text-white w-full py-5 hover:bg-brand-dark shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 transition-all">
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
