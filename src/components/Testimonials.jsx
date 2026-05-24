import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    review: "Absolutely fantastic experience! The Veg Hyderabadi Biryani was authentic and full of flavor. The ambience makes it perfect for family gatherings.",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    review: "Loved the Paneer Tikka Pizza. A great fusion! The live music added a wonderful touch to our romantic dinner. Highly recommend The Amala.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    review: "Premium dining at its best in Khadgaon. The staff is courteous, the place is hygienic, and the food quality is top-notch. Will visit again.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-3 text-sm"
          >
            Reviews
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-light p-10 rounded-3xl shadow-sm border border-brand-beige"
            >
              <div className="flex text-brand mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 mb-8 italic leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand font-serif text-xl font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-medium text-brand-dark">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Verified Guest</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
