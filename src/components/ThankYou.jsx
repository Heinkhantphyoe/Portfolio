import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Thank You!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Your message has been successfully sent. I'll get back to you soon!
        </p>
        <Link 
          to="/" 
          className="py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default ThankYou;
