import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    request: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your table request has been received. We will confirm shortly via phone.');
    setFormData({ name: '', phone: '', guests: '2', date: '', time: '', request: '' });
  };

  return (
    <section id="reservation" className="py-32 bg-brand-light relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Reservation Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-light/95 backdrop-blur-sm" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-3 text-sm"
          >
            Bookings
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Reserve Your Table
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-brand-beige"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="w-full border-b border-brand-beige py-3 px-2 bg-transparent focus:outline-none focus:border-brand transition-colors text-brand-dark placeholder:text-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Phone</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number" 
                className="w-full border-b border-brand-beige py-3 px-2 bg-transparent focus:outline-none focus:border-brand transition-colors text-brand-dark placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Date</label>
              <input 
                type="date" 
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border-b border-brand-beige py-3 px-2 bg-transparent focus:outline-none focus:border-brand transition-colors text-brand-dark text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Guests</label>
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border-b border-brand-beige py-3 px-2 bg-transparent focus:outline-none focus:border-brand transition-colors text-brand-dark text-gray-500"
              >
                {[1,2,3,4,5,6,7,8,9,10,'10+'].map(num => (
                  <option key={num} value={num}>{num} Person{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Special Requests</label>
              <textarea 
                name="request"
                value={formData.request}
                onChange={handleChange}
                rows="3"
                placeholder="Any special requests or occasion?" 
                className="w-full border-b border-brand-beige py-3 px-2 bg-transparent focus:outline-none focus:border-brand transition-colors text-brand-dark placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-4 text-center">
              <button 
                type="submit"
                className="bg-brand text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-brand-green transition-all shadow-sm w-full md:w-auto min-w-[200px]"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
