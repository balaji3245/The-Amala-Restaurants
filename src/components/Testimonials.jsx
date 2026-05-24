import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Eleanor Richards",
      title: "Food Critic",
      review: "An absolute masterclass in flavor and presentation. The truffle risotto is simply divine, and the ambiance transports you to another world.",
      rating: 5
    },
    {
      name: "James Harrington",
      title: "Local Guide",
      review: "The service is impeccable and the wine pairings were perfectly suggested. Truly a premium dining experience right in our city.",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      title: "Guest",
      review: "We celebrated our anniversary here and they made it so special. Every dish was a work of art.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-beige relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-8 bg-brand"></div>
          <span className="text-brand uppercase tracking-widest text-xs font-bold">Reviews</span>
          <div className="h-px w-8 bg-brand"></div>
        </div>
        <h2 className="text-4xl font-serif text-brand-dark mb-16">What Our Guests Say</h2>

        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="text-brand mb-6">
                {[...Array(reviews[current].rating)].map((_, i) => <span key={i} className="text-xl mx-1">★</span>)}
              </div>
              <p className="text-xl md:text-2xl font-serif text-brand-dark italic mb-8 leading-relaxed">
                "{reviews[current].review}"
              </p>
              <h4 className="font-bold text-sm tracking-wider uppercase text-brand-dark">{reviews[current].name}</h4>
              <p className="text-xs text-gray-500 mt-1">{reviews[current].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${current === idx ? 'bg-brand w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
