import React from 'react';
import { motion } from 'framer-motion';

const SignatureDishes = () => {
  const dishes = [
    {
      name: "Truffle Mushroom Risotto",
      desc: "Arborio rice, wild mushrooms, parmesan crisp, truffle oil.",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Pan-Seared Scallops",
      desc: "Cauliflower purée, crispy pancetta, lemon brown butter.",
      price: "₹650",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Herb-Crusted Lamb Rack",
      desc: "Mint chimichurri, roasted root vegetables, red wine jus.",
      price: "₹850",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="signature-dishes" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4 font-sans">Chef's Selection</h4>
            <h2 className="text-5xl font-serif text-brand-dark tracking-tight">Signature Dishes</h2>
          </div>
          <a href="#full-menu" className="pill bg-gray-100 text-brand-dark hover:bg-gray-200 border border-gray-200 font-sans">
            View All Dishes
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bento-card group cursor-pointer flex flex-col"
            >
              <div className="h-64 overflow-hidden relative m-2 rounded-2xl">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-brand-dark font-bold text-sm font-sans">
                  {dish.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand transition-colors">{dish.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium font-sans">{dish.desc}</p>
                </div>
                <div className="mt-6">
                  <button className="text-brand font-bold uppercase tracking-wider text-sm hover:underline font-sans">
                    Order Now →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureDishes;
