import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-light uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          Welcome to The Amala
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
        >
          Taste the Art of <br/> <span className="text-brand-accent italic">Fine Dining</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#reservation" className="bg-brand text-white px-8 py-4 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-brand-green transition-all border border-brand hover:border-brand-green">
            Book A Table
          </a>
          <a href="#full-menu" className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-dark transition-all">
            View Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
