import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="bg-brand-light pt-28 pb-16 relative overflow-hidden">
      
      {/* Curved Background Shape (Optional to break solid color) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 rounded-l-[100px] hidden lg:block -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
              Quick <span className="text-gray-600 font-medium">and</span> Tasty<br/>
              Food Delivered <span className="text-gray-600 font-medium">with</span> <span className="text-brand">a</span><br/>
              <span className="text-brand">Dash of</span> Speed
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-green transition-all shadow-md">
                Order Now
              </button>
              <button className="bg-transparent text-brand border-2 border-brand px-8 py-3 rounded-full font-medium hover:bg-brand hover:text-white transition-all">
                Track Order
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl relative border-[10px] border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Indian Thali" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>

        </div>

        {/* Floating Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-full py-4 px-6 md:px-10 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100"
        >
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="Fast Delivery" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-brand-dark">Fast Delivery</h4>
              <p className="text-[10px] text-gray-500">Promise to deliver<br/>within 30 mins</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="https://cdn-icons-png.flaticon.com/512/3014/3014488.png" alt="Fresh Food" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-brand-dark">Fresh Food</h4>
              <p className="text-[10px] text-gray-500">Your food will be delivered<br/>100% fresh to your home.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-gray-200"></div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="https://cdn-icons-png.flaticon.com/512/1008/1008003.png" alt="Free Delivery" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-brand-dark">Free Delivery</h4>
              <p className="text-[10px] text-gray-500">Your food delivery is<br/>absolutely free. No cost just order</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
