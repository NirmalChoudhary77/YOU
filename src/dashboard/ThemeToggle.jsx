// src/pages/Dashboard/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#1f1f1f]">
      <h3 className="text-lg font-semibold mb-2">🌙 Theme</h3>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-full bg-[#FFDDC1] hover:scale-105 transition"
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
