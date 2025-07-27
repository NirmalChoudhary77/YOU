// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase.js';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <nav className="bg-white dark:bg-black text-[#1A1A1A] dark:text-white shadow-md fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-3">
      {/* Logo */}
      <Link to="/" className="flex items-center" style={{ height: 40, marginLeft: '-10px' }}>
        <img
          src="/you.svg"
          alt="YOU logo"
          style={{ height: 48, width: 'auto', display: 'block' }}
          className="transition duration-200 dark:invert"
        />
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden ml-auto z-50 relative w-10 h-10 flex flex-col justify-center items-center group"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`w-7 h-0.5 bg-pink-500 rounded transition-transform duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`w-7 h-0.5 bg-pink-500 rounded mt-1.5 transition-opacity duration-300 ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-7 h-0.5 bg-pink-500 rounded mt-1.5 transition-transform duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent max-w-full whitespace-nowrap relative">
        <Link to="/">Home</Link>
        <Link to="/skincare">Skincare</Link>
        <Link to="/style">Style</Link>
        <Link to="/hairstyle">Hairstyle</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/personal-expert">Expert Plan</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile" className="hover:text-pink-500 transition">Profile</Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </>
        )}
        <ThemeToggle />
        <div className="absolute right-0 top-0 h-full w-8 pointer-events-none bg-gradient-to-l from-white/80 dark:from-black/80 to-transparent" />
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Nav (Scrollable) */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white dark:bg-zinc-900 shadow-lg z-50 transition-transform duration-300 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden overflow-y-auto flex flex-col pt-24 px-6 pb-10 gap-6`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {[
          { to: '/', label: 'Home' },
          { to: '/skincare', label: 'Skincare' },
          { to: '/style', label: 'Style' },
          { to: '/hairstyle', label: 'Hairstyle' },
          { to: '/planner', label: 'Planner' },
          { to: '/personal-expert', label: 'Expert Plan' },
          { to: '/blog', label: 'Blog' },
          { to: '/about', label: 'About' },
          { to: '/contact', label: 'Contact' },
          { to: '/profile', label: 'Profile' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold hover:text-pink-500 transition"
          >
            {label}
          </Link>
        ))}

        {user ? (
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:underline text-lg font-semibold w-full text-center">
              Login
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:underline text-lg font-semibold w-full text-center">
              Sign Up
            </Link>
          </>
        )}

        <div className="w-full flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
