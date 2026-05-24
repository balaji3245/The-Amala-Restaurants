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
    <section className="py-32 bg-brand-green text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-medium tracking-widest uppercase mb-3 text-sm"
            >
              Our Promise
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight"
            >
              Why Choose The Amala?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand/30 border border-brand/50 flex items-center justify-center text-brand-accent font-medium text-xl mb-5">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-white mb-2">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-[32px] overflow-hidden shadow-xl border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/40 backdrop-blur-md border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <h4 className="text-white font-serif text-2xl lg:text-3xl font-medium">10+</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Years</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <h4 className="text-white font-serif text-2xl lg:text-3xl font-medium">50k+</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Guests</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <h4 className="text-white font-serif text-2xl lg:text-3xl font-medium">100+</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Dishes</p>
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
