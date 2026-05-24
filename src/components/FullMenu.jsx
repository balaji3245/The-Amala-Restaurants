import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FullMenu = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  const menuData = {
    'Starters': [
      { name: "Crispy Calamari", desc: "Served with garlic aioli and lemon.", price: "$14" },
      { name: "Beef Carpaccio", desc: "Thinly sliced beef, capers, parmesan.", price: "$18" },
      { name: "Bruschetta", desc: "Toasted sourdough, heirloom tomatoes, basil.", price: "$12" },
      { name: "Truffle Fries", desc: "Shoestring fries, parmesan, truffle oil.", price: "$10" }
    ],
    'Main Course': [
      { name: "Grilled Salmon", desc: "Asparagus, quinoa, lemon dill sauce.", price: "$32" },
      { name: "Ribeye Steak", desc: "12oz grass-fed beef, mashed potatoes.", price: "$45" },
      { name: "Lobster Linguine", desc: "Fresh pasta, cherry tomatoes, white wine.", price: "$38" },
      { name: "Roasted Chicken", desc: "Free-range chicken, root vegetables.", price: "$26" }
    ],
    'Desserts': [
      { name: "Tiramisu", desc: "Espresso soaked ladyfingers, mascarpone.", price: "$12" },
      { name: "Chocolate Lava Cake", desc: "Vanilla bean ice cream.", price: "$14" },
      { name: "Crème Brûlée", desc: "Classic vanilla custard, caramelized sugar.", price: "$11" }
    ],
    'Drinks': [
      { name: "Signature Cocktail", desc: "Gin, elderflower, cucumber, mint.", price: "$16" },
      { name: "Fine Wine Pairings", desc: "Ask your server for today's selection.", price: "Var" },
      { name: "Artisan Coffee", desc: "Locally roasted espresso blends.", price: "$6" }
    ]
  };

  const tabs = Object.keys(menuData);

  return (
    <section id="full-menu" className="py-24 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-brand"></div>
            <span className="text-brand uppercase tracking-widest text-xs font-bold">Discover</span>
            <div className="h-px w-8 bg-brand"></div>
          </div>
          <h2 className="text-4xl font-serif text-brand-dark">Full Menu</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold transition-all border ${
                activeTab === tab 
                ? 'bg-brand text-white border-brand' 
                : 'bg-transparent text-brand-dark border-gray-200 hover:border-brand hover:text-brand'
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
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {menuData[activeTab].map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-lg text-brand-dark">{item.name}</h3>
                <span className="text-brand font-bold">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FullMenu;
