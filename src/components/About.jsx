import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[480px]"
          >
            <div className="bento-card p-2 h-[300px] sm:h-full">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Chef" 
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-4 h-[400px] sm:h-full">
              <div className="rounded-[24px] p-6 bg-brand/90 text-white flex-1 flex flex-col justify-center items-center text-center backdrop-blur-md border border-brand/20 shadow-lg shadow-brand/20">
                <h3 className="text-6xl font-bold mb-2">15+</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-white/80">Years Mastery</p>
              </div>
              <div className="bento-card p-2 flex-[2]">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Kitchen" 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
            className="lg:pl-16 mt-12 lg:mt-0"
          >
            <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Our Story</h4>
            <h2 className="text-5xl font-bold text-brand-dark mb-8 leading-tight tracking-tight">
              Crafting Culinary <br/> Masterpieces.
            </h2>
            
            <p className="text-gray-500 mb-6 leading-relaxed text-lg font-medium">
              Founded in the heart of the city, The Amala is a beacon of modern gastronomy. We believe dining should be an immersive experience that tantalizes all the senses.
            </p>
            
            <p className="text-gray-500 mb-10 leading-relaxed text-lg font-medium">
              Our kitchen is a laboratory of flavor where traditional techniques meet avant-garde innovation. Every plate is a carefully constructed work of art.
            </p>

            <div className="flex items-center gap-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/320px-Signature_of_John_Hancock.svg.png" 
                alt="Chef Signature" 
                className="h-12 opacity-80 mix-blend-multiply"
              />
              <div>
                <p className="font-bold text-brand-dark text-lg">Executive Chef</p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">The Amala</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
