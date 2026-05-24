import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          Welcome to The Amala
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-6 leading-tight text-glow"
        >
          Luxury Dining Experience <br className="hidden md:block"/> with Authentic Taste
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
        >
          Discover a symphony of flavors in a premium, cozy ambiance perfect for family dining, romantic evenings, and memorable banquets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link to="menu" smooth={true} duration={500}>
            <button className="bg-brand text-white px-8 py-3.5 rounded-full font-medium hover:bg-yellow-600 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] w-48">
              Explore Menu
            </button>
          </Link>
          
          <Link to="reservation" smooth={true} duration={500}>
            <button className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-brand-dark transition-all w-48">
              Book Table
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-white"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
