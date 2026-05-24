import React from 'react';
import { motion } from 'framer-motion';
import { 
  TreePine, 
  Truck, 
  ShoppingBag, 
  Utensils, 
  Music, 
  Heart, 
  Car, 
  Users, 
  CalendarCheck, 
  GlassWater, 
  Leaf, 
  Baby 
} from 'lucide-react';

const facilities = [
  { name: 'Outdoor Seating', icon: TreePine },
  { name: 'Delivery', icon: Truck },
  { name: 'Takeaway', icon: ShoppingBag },
  { name: 'Dine-In', icon: Utensils },
  { name: 'Live Music', icon: Music },
  { name: 'Wheelchair Accessible', icon: Heart },
  { name: 'Free Parking', icon: Car },
  { name: 'Family Friendly', icon: Users },
  { name: 'Reservation Available', icon: CalendarCheck },
  { name: 'Private Dining', icon: GlassWater },
  { name: 'Vegan Options', icon: Leaf },
  { name: 'Kids Friendly', icon: Baby },
];

const Facilities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-medium tracking-widest uppercase mb-2"
          >
            Amenities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-dark"
          >
            Facilities & Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-brand-light border border-brand-beige rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand transition-colors duration-300">
                  <Icon className="w-8 h-8 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-medium text-brand-dark">{facility.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
