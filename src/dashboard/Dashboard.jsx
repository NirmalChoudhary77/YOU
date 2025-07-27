// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import ProfileCard from './ProfileCard';
import UploadSection from './UploadSection';
import ThemeToggle from './ThemeToggle';

const Dashboard = () => {
  return (
    <div className="pt-24 px-6 pb-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">🎯 Your Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProfileCard />
        <UploadSection />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Dashboard;
