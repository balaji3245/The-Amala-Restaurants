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
      review: "We celebrated our anniversary here and they made it so special. Every dish was a work of art. The staff went above and beyond.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Reviews</h4>
        <h2 className="text-5xl font-bold text-brand-dark tracking-tight mb-16">What Guests Say</h2>

        <div className="bento-card p-12 relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full"
            >
              <div className="text-brand mb-6 text-2xl flex justify-center gap-1">
                {[...Array(reviews[current].rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 leading-tight">
                "{reviews[current].review}"
              </p>
              <h4 className="font-bold tracking-wider text-brand-dark">{reviews[current].name}</h4>
              <p className="text-sm text-gray-500 font-medium mt-1">{reviews[current].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-brand w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
