import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Head Chef" 
                className="w-full h-full object-cover rounded-t-full shadow-lg border-8 border-brand-beige"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand text-white p-8 rounded-sm shadow-xl hidden md:block">
                <h4 className="font-serif text-2xl mb-1">15+</h4>
                <p className="text-xs uppercase tracking-widest text-white/80">Years of<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand"></div>
              <span className="text-brand uppercase tracking-widest text-xs font-bold">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
              A Symphony of <br/> <span className="italic text-brand">Flavors & Passion</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              Founded in the heart of the city, The Amala has been a beacon of culinary excellence. Our journey started with a simple belief: that dining should be an immersive experience that tantalizes the senses and brings people together.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed font-light">
              Under the guidance of our Executive Chef, we blend traditional techniques with modern innovation to create dishes that are both familiar and extraordinary. Every ingredient is carefully sourced to ensure the highest quality.
            </p>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" 
              alt="Signature" 
              className="h-12 opacity-40"
            />
            <p className="mt-2 text-sm text-gray-500 font-medium">Head Chef, The Amala</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
