// src/pages/Dashboard/ProfileCard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProfileCard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#1f1f1f]">
      <h3 className="text-lg font-semibold mb-2">👤 Profile Info</h3>
      <p><strong>Email:</strong> {currentUser?.email}</p>
      <p><strong>UID:</strong> {currentUser?.uid}</p>
      <p className="text-sm mt-2 text-gray-500">You can customize more soon...</p>
    </div>
  );
};

export default ProfileCard;
