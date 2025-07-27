import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const getFirstName = (email) => {
    if (!email) return '';
    const namePart = email.split('@')[0];
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  };

  const cards = [
    { title: 'Skin Profile', path: '/profile/skin', emoji: '🧴' },
    { title: 'Style Tracker', path: '/profile/style', emoji: '👗' },
    { title: 'Hair Plan', path: '/profile/hair', emoji: '💇' },
    { title: 'Product History', path: '/profile/products', emoji: '🛍️' },
    { title: 'Submissions', path: '/profile/submissions', emoji: '📄' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-4 sm:px-6 pb-16 max-w-6xl mx-auto"
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
        👤 Welcome, {getFirstName(user?.email)}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(card.path)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-3">{card.emoji}</div>
            <h2 className="text-base sm:text-lg font-semibold">{card.title}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Profile;
