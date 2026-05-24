import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-1 mt-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Ambience" 
                  className="rounded-3xl shadow-sm w-full h-72 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gourmet Dish" 
                  className="rounded-3xl shadow-sm w-full h-72 object-cover"
                />
              </motion.div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-brand-light w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-brand-light z-10"
            >
              <span className="text-3xl font-serif font-medium">Est.</span>
              <span className="text-xs uppercase tracking-widest mt-1">2010</span>
            </motion.div>
          </div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-brand font-medium tracking-widest uppercase mb-3 text-sm">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">A Journey of Taste and Elegance</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Welcome to The Amala Restaurant & Banquets, a sanctuary of culinary excellence located in the heart of Khadgaon. We pride ourselves on offering a diverse menu that traverses Indian, Chinese, Italian, and fast food, all prepared with the freshest ingredients and an uncompromising standard of hygiene.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Whether you're joining us for a cozy family dinner, enjoying live music in our romantic dining area, or hosting a grand celebration in our premium banquet halls, The Amala promises an unforgettable experience defined by warm hospitality and an elegant atmosphere.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-brand-dark">Master Chefs</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-brand-dark">Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-brand-dark">Premium Ambience</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center text-brand">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-medium text-brand-dark">Live Music</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
