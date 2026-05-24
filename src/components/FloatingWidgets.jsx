import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const FloatingWidgets = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919923333989?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20The%20Amala%20Restaurant."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand rounded-full flex items-center justify-center text-white shadow-md border border-brand-light/20 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

    </div>
  );
};

export default FloatingWidgets;
