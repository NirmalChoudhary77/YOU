import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white dark:bg-[#232323] border-t text-sm text-gray-600 dark:text-gray-300 py-6 px-4 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left side */}
        <div>
          <p className="font-semibold text-black dark:text-white">YOU ✨</p>
          <p>© {year} YOU. Built with ❤️ by the YOU Team.</p>
        </div>

        {/* Center nav links */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-end">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right side social icons */}
        <div className="flex gap-3">
         <a
                           href="https://www.linkedin.com/in/nirmal-choudhary-b1a7392ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:scale-110 transition"
                         >
                           <FaLinkedin />
                         </a>
                         <a
                           href="https://github.com/NirmalChoudhary77"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:scale-110 transition"
                         >
                           <FaGithub />
                         </a>
                         <a
                           href="https://www.instagram.com/nirmal_choudhary___?igsh=MTl4ZmN3b2sxMGtpMg=="
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:scale-110 transition"
                         >
                           <FaInstagram />
                         </a>
                         <a
                         href="https://x.com/Nirmal7728?t=OasGNMIiWPBGs88vfa1kiQ&s=09"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:scale-110 transition"
                         >
                           <FaXTwitter />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
