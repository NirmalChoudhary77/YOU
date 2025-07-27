// src/components/CategoryCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/3 hover:shadow-xl cursor-pointer transition-all"
      whileHover={{ y: -8 }}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default CategoryCard;
