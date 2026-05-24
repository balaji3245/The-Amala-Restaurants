import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { title: 'Fresh Ingredients', desc: 'We source locally to ensure the highest quality and freshness in every dish.' },
  { title: 'Hygienic Kitchen', desc: 'Strict adherence to cleanliness and food safety protocols.' },
  { title: 'Experienced Chefs', desc: 'Our culinary team brings decades of experience to your table.' },
  { title: 'Fast Service', desc: 'Prompt and courteous service without compromising on quality.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand font-medium tracking-widest uppercase mb-2"
            >
              Our Promise
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-8"
            >
              Why Choose The Amala?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center text-brand font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 glass-dark">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-serif text-2xl font-bold">10+</h4>
                  <p className="text-gray-300 text-sm uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <h4 className="text-white font-serif text-2xl font-bold">50k+</h4>
                  <p className="text-gray-300 text-sm uppercase tracking-wider">Happy Guests</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <h4 className="text-white font-serif text-2xl font-bold">100+</h4>
                  <p className="text-gray-300 text-sm uppercase tracking-wider">Menu Items</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
