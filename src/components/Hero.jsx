import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-brand-light overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-7 pr-0 lg:pr-12"
          >
            <div className="inline-block pill bg-orange-50 text-brand mb-6 border border-brand/20 shadow-sm">
              ✨ Experience Premium Fine Dining
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-brand-dark mb-6 leading-[1.1] tracking-tighter">
              A Taste of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#FF8A33]">Perfection.</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
              Elevate your culinary journey. Fresh ingredients, masterful chefs, and an ambiance that speaks luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reservation" className="pill bg-brand text-white text-center shadow-lg shadow-brand/30 hover:shadow-xl hover:-translate-y-1">
                Reserve a Table
              </a>
              <a href="#full-menu" className="pill bg-gray-100 text-brand-dark text-center hover:bg-gray-200 border border-gray-200">
                Explore Menu
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="bento-card h-[500px] md:h-[600px] relative p-2">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Signature Dish" 
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-brand-dark">Herb-Crusted Lamb</p>
                  <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mt-1">Chef's Signature</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                  $42
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
