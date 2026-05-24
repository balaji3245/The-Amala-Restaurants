import React from 'react';
import { motion } from 'framer-motion';

const SignatureDishes = () => {
  const dishes = [
    {
      name: "Truffle Mushroom Risotto",
      desc: "Arborio rice, wild mushrooms, parmesan crisp, truffle oil.",
      price: "$28",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Pan-Seared Scallops",
      desc: "Cauliflower purée, crispy pancetta, lemon brown butter.",
      price: "$34",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Herb-Crusted Lamb Rack",
      desc: "Mint chimichurri, roasted root vegetables, red wine jus.",
      price: "$42",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="signature-dishes" className="py-24 bg-brand-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-brand"></div>
            <span className="text-brand uppercase tracking-widest text-xs font-bold">Chef's Selection</span>
            <div className="h-px w-8 bg-brand"></div>
          </div>
          <h2 className="text-4xl font-serif text-brand-dark">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white group cursor-pointer shadow-sm"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 text-brand-dark font-bold text-sm shadow-md">
                  {dish.price}
                </div>
              </div>
              <div className="p-8 text-center border border-t-0 border-gray-100">
                <h3 className="text-xl font-serif text-brand-dark mb-3 group-hover:text-brand transition-colors">{dish.name}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureDishes;
