import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-us" className="py-16 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full dashed-border-orange p-3 relative bg-white mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-brand italic font-serif text-xl mb-2">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              A Legacy of <span className="text-brand">Culinary</span> Excellence
            </h2>
            
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Founded in 2026, The Amala has been serving authentic, mouth-watering Indian cuisine with a dash of speed. Our passion for food is matched only by our dedication to customer service. We believe that great food brings people together.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-green transition-all shadow-sm text-sm">
                Read More
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
