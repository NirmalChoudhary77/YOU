// src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import FileUploader from '../components/FileUploader';


const Dashboard = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome, {user?.email.split('@')[0]} ✨</h1>
      <p className="text-center text-gray-600 mb-8">
        This is your personal Glow-Up Dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your Skin Profile</h2>
          <p className="text-sm text-gray-500">Coming soon: AI-analyzed skin type and progress timeline 📊</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Style Tracker</h2>
          <p className="text-sm text-gray-500">Add your favorite outfits & get seasonal outfit ideas!</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Hair Plan</h2>
          <p className="text-sm text-gray-500">Track what hairstyles you’ve tried and liked 💇</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Product History</h2>
          <p className="text-sm text-gray-500">View products used & reorder from your personalized kit</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
