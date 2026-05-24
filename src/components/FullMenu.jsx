import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FullMenu = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  const menuData = {
    'Starters': [
      { name: "Crispy Calamari", desc: "Served with garlic aioli and lemon.", price: "₹250" },
      { name: "Beef Carpaccio", desc: "Thinly sliced beef, capers, parmesan.", price: "₹350" },
      { name: "Bruschetta", desc: "Toasted sourdough, heirloom tomatoes, basil.", price: "₹200" },
      { name: "Truffle Fries", desc: "Shoestring fries, parmesan, truffle oil.", price: "₹150" }
    ],
    'Main Course': [
      { name: "Grilled Salmon", desc: "Asparagus, quinoa, lemon dill sauce.", price: "₹550" },
      { name: "Ribeye Steak", desc: "12oz grass-fed beef, mashed potatoes.", price: "₹900" },
      { name: "Lobster Linguine", desc: "Fresh pasta, cherry tomatoes, white wine.", price: "₹750" },
      { name: "Roasted Chicken", desc: "Free-range chicken, root vegetables.", price: "₹480" }
    ],
    'Desserts': [
      { name: "Tiramisu", desc: "Espresso soaked ladyfingers, mascarpone.", price: "₹200" },
      { name: "Chocolate Lava Cake", desc: "Vanilla bean ice cream.", price: "₹250" },
      { name: "Crème Brûlée", desc: "Classic vanilla custard, caramelized sugar.", price: "₹180" }
    ],
    'Drinks': [
      { name: "Signature Cocktail", desc: "Gin, elderflower, cucumber, mint.", price: "₹300" },
      { name: "Fine Wine Pairings", desc: "Ask your server for today's selection.", price: "Var" },
      { name: "Artisan Coffee", desc: "Locally roasted espresso blends.", price: "₹120" }
    ]
  };

  const tabs = Object.keys(menuData);

  return (
    <section id="full-menu" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand font-bold uppercase tracking-widest text-sm mb-4 font-sans">Discover</h4>
          <h2 className="text-5xl font-serif text-brand-dark tracking-tight">Full Menu</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 glass p-2 rounded-full max-w-fit mx-auto overflow-hidden shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide font-sans transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-white/80 text-brand-dark shadow-md' 
                : 'bg-transparent text-gray-600 hover:text-brand-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {menuData[activeTab].map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand transition-colors">{item.name}</h3>
                <div className="flex-1 border-b-2 border-dotted border-gray-200 mx-4 relative top-[-4px]"></div>
                <span className="text-brand font-bold text-lg font-sans">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm font-medium font-sans">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FullMenu;
