import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Clock, ChefHat } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Leaf size={32} />, title: "Fresh Ingredients", desc: "We source local, organic produce daily to ensure maximum flavor." },
    { icon: <ShieldCheck size={32} />, title: "Hygienic Kitchen", desc: "Our pristine kitchen exceeds all health and safety standards." },
    { icon: <Clock size={32} />, title: "Fast Service", desc: "Prompt, attentive service without compromising on quality." },
    { icon: <ChefHat size={32} />, title: "Experienced Chefs", desc: "Masterful culinary artists with global experience." }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-brand-accent"></div>
            <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Our Promise</span>
            <div className="h-px w-8 bg-brand-accent"></div>
          </div>
          <h2 className="text-4xl font-serif">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto border border-white/20 rounded-full flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand transition-colors duration-500">
                {feat.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
