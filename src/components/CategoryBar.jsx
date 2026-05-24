import React from 'react';

const CategoryBar = () => {
  const regions = ["Rajasthan", "South Indian", "Gujarat", "Maharashtra", "West Bengal", "Punjab"];

  return (
    <div className="w-full bg-[#FAFAFA] border-y border-gray-200 py-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-w-max space-x-8">
        {regions.map((region, idx) => (
          <div key={idx} className="flex items-center gap-2 cursor-pointer group">
            <span className="text-xl text-brand-dark group-hover:text-brand transition-colors font-medium">+</span>
            <span className="text-base font-bold text-gray-700 group-hover:text-brand-dark transition-colors">{region}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
