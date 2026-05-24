import React from 'react';
import { motion } from 'framer-motion';

const FeaturedMenu = () => {
  const menuItems = [
    {
      category: "Indian Dessert",
      name: "Angoori Rasmalai",
      price: "250",
      rating: 5,
      reviews: "100",
      image: "https://images.unsplash.com/photo-1596450514735-a1112e1069f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Indian Tea Time",
      name: "Snacks",
      price: "250",
      rating: 5,
      reviews: "80",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Indian Tea",
      name: "Time Snacks",
      price: "200",
      rating: 5,
      reviews: "50",
      image: "https://images.unsplash.com/photo-1626779848529-5ee411aebde8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "South Indian",
      name: "Masala Dosa",
      price: "150",
      rating: 5,
      reviews: "120",
      image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Gujarati",
      name: "Pav Bhaji",
      price: "250",
      rating: 5,
      reviews: "50",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Rajasthan",
      name: "Dal Bati Churma",
      price: "450",
      rating: 5,
      reviews: "500",
      image: "https://images.unsplash.com/photo-1605333396914-256122d25078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-1">
              Our <span className="text-brand">Regular</span> Menu
            </h2>
            <p className="text-gray-400 text-xs w-64">
              These Are Our Regular Menus. You Can Order Anything You Like.
            </p>
          </div>
          <button className="bg-brand text-white px-6 py-2 rounded-full font-medium hover:bg-brand-green transition-colors text-sm shadow-sm">
            See All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-brand-light rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg p-5 pt-16 border border-brand-beige"
            >
              {/* Image protruding */}
              <div className="absolute -top-12 right-4 w-28 h-28 rounded-full dashed-border-orange p-1.5 bg-white">
                <div className="w-full h-full rounded-full overflow-hidden shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-2/3">
                <h3 className="text-sm font-bold text-brand-dark leading-snug mb-2">
                  <span className="text-brand font-medium">{item.category}</span><br/>
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold text-brand-dark">₹{item.price}</span>
                  <button className="bg-brand text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-brand-green transition-colors shadow-sm">
                    Buy Now
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
