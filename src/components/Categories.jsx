import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Refreshing Beverages', icon: '🍹', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80' },
  { name: 'Soups', icon: '🥣', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
  { name: 'Quick Bites', icon: '🍟', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80' },
  { name: 'Pizza & Pasta', icon: '🍕', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80' },
  { name: 'Indian Cuisine', icon: '🍛', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80' },
  { name: 'Oriental Cuisine', icon: '🍜', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80' },
  { name: 'Biryani & Rice', icon: '🍚', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&q=80' },
  { name: 'Desserts', icon: '🍰', image: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9ca?w=500&q=80' },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-2"
          >
            Explore
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Popular Categories
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] w-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                <span className="text-3xl mb-2 transform transition-transform group-hover:-translate-y-2">{category.icon}</span>
                <h3 className="text-white font-serif text-lg font-medium">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
