import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      review: "Absolutely fantastic! The food was delivered super fast and it tasted just like homemade Indian food. Highly recommend the Paneer Bhuna Masala.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Patel",
      review: "The Amala has the best delivery service. The food is always piping hot and the packaging is excellent. The coupons make it a great deal!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amit Kumar",
      review: "A wonderful dining experience at home. Quick, tasty, and reasonably priced. Their South Indian dishes are to die for.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h4 className="text-brand italic font-serif text-xl mb-1">What They Say</h4>
          <h2 className="text-3xl font-bold text-brand-dark mb-2">Customer <span className="text-brand">Reviews</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFA] rounded-2xl p-6 relative border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed italic">"{review.review}"</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
