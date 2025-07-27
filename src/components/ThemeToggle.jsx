// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from "@/components/theme-provider";
import { useAuth } from '../context/AuthContext';


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // ThemeProvider now handles DOM class and localStorage
    // Optionally persist to Supabase here if needed
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
