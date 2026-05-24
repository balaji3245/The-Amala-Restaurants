import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Paneer Tikka Pizza', desc: 'Fusion pizza with tandoori paneer, mozzarella, and bell peppers.', price: '₹349', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
  { name: 'Veg Hyderabadi Biryani', desc: 'Aromatic basmati rice cooked with mixed vegetables and rich spices.', price: '₹299', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80' },
  { name: 'Paneer Butter Masala', desc: 'Cottage cheese cubes in a creamy, rich tomato and butter gravy.', price: '₹320', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=500&q=80' },
  { name: 'Dragon Potato', desc: 'Crispy potato tossed in a spicy, sweet, and tangy dragon sauce.', price: '₹249', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=500&q=80' },
  { name: 'Mexican Sizzler', desc: 'Sizzling hot plate with rice, grilled veggies, fries, and Mexican sauce.', price: '₹499', image: 'https://images.unsplash.com/photo-1544025162-811114215b36?w=500&q=80' },
  { name: 'Jalapeno Cheese Ball', desc: 'Golden fried balls filled with melting cheese and spicy jalapenos.', price: '₹279', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80' },
  { name: 'Triple Sundae', desc: 'Three scoops of premium ice cream with nuts, cherry, and chocolate syrup.', price: '₹220', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80' },
  { name: 'Cold Coffee with Ice Cream', desc: 'Rich blended coffee topped with vanilla ice cream and cocoa dust.', price: '₹180', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80' },
];

const FeaturedMenu = () => {
  return (
    <section id="menu" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-2"
          >
            Specialties
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Featured Menu
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-brand-beige"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-brand-dark shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-brand-dark mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{item.desc}</p>
                <div className="mt-4 pt-4 border-t border-brand-beige flex justify-between items-center">
                  <button className="text-brand font-medium hover:text-brand-dark transition-colors text-sm uppercase tracking-wide">
                    Order Now
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

export default FeaturedMenu;
