import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-beige shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-5/12 bg-brand-dark text-white p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h4 className="text-brand-accent italic font-serif text-2xl mb-2">Book a Table</h4>
              <h2 className="text-4xl font-serif mb-8">Make a Reservation</h2>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                Experience dining at its finest. Whether it's a romantic dinner for two or a corporate gathering, we ensure an unforgettable experience.
              </p>
              <div className="space-y-4 text-sm">
                <p className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Mon - Fri</span> <span>11:00 AM - 10:00 PM</span></p>
                <p className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Sat - Sun</span> <span>10:00 AM - 11:00 PM</span></p>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="Your Phone" />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Date</label>
                <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm text-gray-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Time</label>
                <input type="time" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm text-gray-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Guests</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm text-gray-500 appearance-none">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-6">
                <button type="submit" className="bg-brand text-white w-full py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark transition-colors">
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
