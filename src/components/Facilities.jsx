import React from 'react';
import { Wifi, Car, Users, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    { icon: <Wifi className="w-6 h-6" />, title: "Free Wi-Fi", desc: "Stay connected while you dine." },
    { icon: <Car className="w-6 h-6" />, title: "Valet Parking", desc: "Hassle-free parking right at the door." },
    { icon: <Users className="w-6 h-6" />, title: "Family Friendly", desc: "Kid's menu and high chairs available." },
    { icon: <Music className="w-6 h-6" />, title: "Live Music", desc: "Enjoy soothing tunes on weekends." }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-brand italic font-serif text-xl mb-1">Amenities</h4>
          <h2 className="text-3xl font-bold text-brand-dark mb-2">Our <span className="text-brand">Facilities</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-light p-6 rounded-2xl border border-brand-beige text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full dashed-border-orange bg-white flex items-center justify-center text-brand mx-auto mb-4">
                {fac.icon}
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{fac.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
