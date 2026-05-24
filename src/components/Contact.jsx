import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-2"
          >
            Get in Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Contact & Location
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-brand-light p-2 md:p-4 rounded-3xl border border-brand-beige shadow-sm">
          
          {/* Map Side */}
          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden relative">
            {/* Google Maps Embed placeholder - Using a styled div to represent the map for aesthetic preview */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15217.433917637851!2d76.5414008!3d18.3976865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf838150f88dc5%3A0x6b8f8a3794b15096!2sKhadgaon%2C%20Latur%2C%20Maharashtra%20413531!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
            ></iframe>
            {/* Map styling overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </div>

          {/* Info Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex flex-shrink-0 items-center justify-center text-brand">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark font-medium mb-2">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Sonai Chowk, Ausa Ring Rd, Sona Nagar,<br />
                    Khadgaon, Maharashtra 413531
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex flex-shrink-0 items-center justify-center text-brand">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark font-medium mb-2">Opening Hours</h4>
                  <p className="text-gray-600">Monday - Sunday</p>
                  <p className="text-brand font-medium mt-1">11:00 AM – 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex flex-shrink-0 items-center justify-center text-brand">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark font-medium mb-2">Contact</h4>
                  <p className="text-gray-600 mb-1">Reservation & Enquiries</p>
                  <a href="tel:09923333989" className="text-brand font-medium text-lg hover:underline transition-all">
                    +91 99233 33989
                  </a>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
