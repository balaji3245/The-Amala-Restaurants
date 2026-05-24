import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-3 text-sm"
          >
            Visit Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Location & Timings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-sm border border-brand-beige group"
          >
            {/* Fake Map Image - User would replace with actual iframe */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Map Location" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-light/30 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3">
              <MapPin className="text-brand w-6 h-6" />
              <div className="text-brand-dark font-medium whitespace-nowrap">The Amala Restaurant</div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-beige/30 p-10 md:p-12 rounded-3xl border border-brand-beige shadow-sm flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand border border-brand-beige">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-brand-dark mb-2">Location</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Sonai Chowk, Ausa Ring Rd, Sona Nagar,<br/>
                    Khadgaon, Maharashtra 413531
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand border border-brand-beige">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-brand-dark mb-2">Contact</h4>
                  <p className="text-gray-500 leading-relaxed mb-1">Reservation & Enquiries</p>
                  <a href="tel:09923333989" className="text-brand font-medium text-lg hover:underline transition-all">
                    +91 99233 33989
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand border border-brand-beige">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-brand-dark mb-2">Opening Hours</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Monday - Sunday<br/>
                    11:00 AM – 11:30 PM
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-beige">
                <h4 className="font-serif text-xl text-brand-dark font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="px-4 py-2 rounded-full bg-white border border-brand-beige text-gray-500 hover:text-brand hover:border-brand transition-colors text-sm font-medium">
                    Facebook
                  </a>
                  <a href="#" className="px-4 py-2 rounded-full bg-white border border-brand-beige text-gray-500 hover:text-brand hover:border-brand transition-colors text-sm font-medium">
                    Instagram
                  </a>
                  <a href="#" className="px-4 py-2 rounded-full bg-white border border-brand-beige text-gray-500 hover:text-brand hover:border-brand transition-colors text-sm font-medium">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
