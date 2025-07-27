import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SkinProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 pb-10 max-w-3xl mx-auto"
    >
      <Link to="/profile" className="text-blue-500 underline mb-4 inline-block">← Back to Profile</Link>
      <h1 className="text-3xl font-bold mb-4">🧬 Your Skin Profile</h1>
      <p className="text-gray-700 dark:text-gray-300">Coming soon: AI-analyzed skin type insights and a progress timeline.</p>
    </motion.div>
  );
};

export default SkinProfile;
