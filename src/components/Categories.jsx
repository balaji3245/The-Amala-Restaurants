import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const dishes = [
    {
      name: "Indian Vegetable Pulao",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Paneer Bhuna Masala",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vermicelli Upma",
      image: "https://images.unsplash.com/photo-1626779848529-5ee411aebde8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark w-full md:w-1/2 leading-tight">
            Our <span className="text-brand">Best Delivered</span><br/>
            Indian Dish
          </h2>
          <p className="hidden md:block w-1/3 text-gray-400 text-sm leading-relaxed border-l-2 border-gray-100 pl-4">
            It's not just about bringing you good food from restaurants, we deliver you experience.
          </p>
        </div>

        {/* Circular Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full dashed-border-orange p-2 mb-4 relative group cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-dark w-4/5 leading-snug mb-2">
                {dish.name}
              </h3>
              <a href="#" className="text-brand font-medium hover:text-brand-green transition-colors flex items-center gap-1 text-sm">
                Order Now <span className="text-base">&gt;</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
