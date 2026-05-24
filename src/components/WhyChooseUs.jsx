import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Clock, ChefHat } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Leaf size={28} />, title: "Fresh Ingredients", desc: "Local, organic produce daily for maximum flavor." },
    { icon: <ShieldCheck size={28} />, title: "Hygienic Kitchen", desc: "Pristine kitchen exceeding health standards." },
    { icon: <Clock size={28} />, title: "Fast Service", desc: "Prompt service without compromising quality." },
    { icon: <ChefHat size={28} />, title: "Master Chefs", desc: "Culinary artists with global experience." }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Our Promise</h4>
          <h2 className="text-5xl font-bold text-brand-dark tracking-tight">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bento-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-brand-dark">{feat.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
