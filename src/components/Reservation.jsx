import React from 'react';

const Reservation = () => {
  return (
    <section id="reservation" className="py-16 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-brand-beige p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h4 className="text-brand italic font-serif text-xl mb-1">Book A Table</h4>
            <h2 className="text-3xl font-bold text-brand-dark mb-2">Make A <span className="text-brand">Reservation</span></h2>
            <p className="text-gray-400 text-sm">Reserve your spot and enjoy the best food with the speed of dash.</p>
          </div>

          <form className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
              />
              <input 
                type="date" 
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm text-gray-500"
              />
              <input 
                type="time" 
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm text-gray-500"
              />
              <select className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm text-gray-500 appearance-none">
                <option value="">Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
            
            <div className="text-center mt-8">
              <button 
                type="submit" 
                className="bg-brand text-white px-10 py-3 rounded-full font-bold tracking-wide hover:bg-brand-green transition-all shadow-md"
              >
                Book Now
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Reservation;
