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
    <section id="reservation" className="py-24 bg-brand-light relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/50 rounded-l-full hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-beige">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Reserved Table" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-4 text-glow">Book Your Experience</h3>
                  <p className="text-white/90 max-w-sm mx-auto">
                    Reserve your table to ensure the perfect spot for your memorable dining experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-brand-dark mb-8">Table Reservation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand transition-colors bg-transparent" 
                        placeholder="+91 99233 33989"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-brand transition-colors">
                        <Users className="w-4 h-4 text-gray-400 mr-2" />
                        <select 
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-transparent focus:outline-none appearance-none cursor-pointer"
                        >
                          {[1,2,3,4,5,6,7,8,9,10,'10+'].map(num => (
                            <option key={num} value={num}>{num} Person{num !== 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-brand transition-colors">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <input 
                          type="date" 
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <div className="flex items-center border-b border-gray-300 py-2 focus-within:border-brand transition-colors">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <input 
                          type="time" 
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                    <div className="flex items-start border-b border-gray-300 py-2 focus-within:border-brand transition-colors">
                      <MessageSquare className="w-4 h-4 text-gray-400 mr-2 mt-1" />
                      <textarea 
                        name="request"
                        value={formData.request}
                        onChange={handleChange}
                        rows="2" 
                        className="w-full bg-transparent focus:outline-none resize-none"
                        placeholder="E.g., Anniversary celebration, wheelchair access..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand text-white py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-colors shadow-lg mt-4"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
