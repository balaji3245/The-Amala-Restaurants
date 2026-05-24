import React from 'react';

const Banners = () => {
  return (
    <section id="offers" className="py-16 bg-white border-b-2 border-dashed border-brand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[300px]">
          
          {/* Left Large Banner */}
          <div className="lg:w-1/2 h-[250px] lg:h-full bg-[#FFD1A6] rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background dashed circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full dashed-border-orange opacity-40 pointer-events-none"></div>
            
            <h4 className="text-brand italic font-serif text-xl mb-1 z-10">INDIAN Special</h4>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-4 drop-shadow-sm z-10">Coupon Code</h2>
            
            <div className="relative z-10 bg-brand/10 border-2 border-brand/40 px-8 py-3 rounded flex flex-col items-center">
              <span className="text-2xl font-bold text-white block mb-1 drop-shadow-md">60% OFF</span>
              <span className="text-brand-dark font-bold text-xs tracking-widest bg-white/70 px-3 py-1 rounded">FOODDASH60</span>
            </div>
            
            {/* Decorative items */}
            <img src="https://cdn-icons-png.flaticon.com/512/3233/3233015.png" className="absolute bottom-8 left-8 w-12 opacity-50" alt="Fork" />
            <img src="https://cdn-icons-png.flaticon.com/512/3233/3233015.png" className="absolute bottom-8 right-8 w-12 opacity-50 scale-x-[-1]" alt="Spoon" />
          </div>

          {/* Right Column Banners */}
          <div className="lg:w-1/2 h-full flex flex-col gap-6">
            
            {/* Top Right Banner */}
            <div className="flex-1 bg-brand rounded-2xl p-5 flex items-center justify-between overflow-hidden relative min-h-[140px]">
              {/* Fake 25% repeating text background */}
              <div className="absolute inset-0 flex flex-col justify-center leading-none opacity-20 -rotate-12 scale-150 pointer-events-none text-white font-black text-4xl whitespace-nowrap">
                <span>25% OFF 25% OFF 25% OFF</span>
                <span>25% OFF 25% OFF 25% OFF</span>
                <span>25% OFF 25% OFF 25% OFF</span>
              </div>
              
              <div className="z-10 w-full text-right">
                <span className="text-yellow-300 italic font-serif text-base">SPECIAL OFFER</span>
                <h3 className="text-white font-black text-xl uppercase tracking-wider mt-1 mb-1">South Indian</h3>
                <p className="text-white/90 text-[9px] mb-2 font-medium">GET BEST FOOD ANYWHERE,<br/>ANYTIME WITH SPEED OF DASH</p>
                <div className="inline-block border border-white text-white font-bold px-3 py-1 rounded-full text-xs">
                  123-456-7890
                </div>
              </div>
            </div>

            {/* Bottom Right Banner */}
            <div className="flex-1 bg-[#4A3018] rounded-2xl p-5 relative overflow-hidden flex items-center justify-end text-right min-h-[140px]">
               {/* Background food items */}
              <div className="absolute -left-10 top-0 h-full w-2/3">
                <img src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 rounded-r-full border-8 border-[#4A3018]" alt="Food" />
              </div>
              
              <div className="z-10 bg-[#4A3018]/60 p-2 rounded-xl backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:p-0">
                <h2 className="text-[#FFB800] font-serif italic text-3xl mb-1 drop-shadow-md">Indian</h2>
                <h3 className="text-white font-black text-xl uppercase tracking-widest mb-2">Restaurant</h3>
                <button className="bg-brand text-white text-[10px] px-3 py-1.5 rounded-full font-medium shadow-lg hover:bg-brand-green">
                  Special offer only today
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banners;
