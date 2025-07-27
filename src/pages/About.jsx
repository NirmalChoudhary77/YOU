// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 pb-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">About YOU</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            YOU isn’t just a platform — it’s a movement. 💫
          </p>
        </div>

        {/* About Box */}
        <div className="bg-white dark:bg-[#232323] p-8 rounded-2xl shadow-xl text-gray-700 dark:text-gray-200 text-md space-y-5">
          <p>
            We believe that true transformation starts with guidance, consistency, and self-belief.
            From skincare to style, from hair to habits — we’re here to help you become the best version of yourself.
          </p>
          <p>
            Whether you’re just beginning your glow-up journey or looking for expert-level routines,
            YOU offers personalized plans, curated content, and real support.
          </p>
          <p className="italic text-blue-500 dark:text-blue-400">
            Because your glow-up is about YOU. And you deserve the best. 🌟
          </p>
        </div>

        {/* Founder Section */}
        <div className="mt-20 bg-gray-100 dark:bg-[#1e1e1e] rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <img
              src="founder.jpg" // 🔁 Replace with your photo
              alt="Nirmal Choudhary"
              className="w-36 h-36 rounded-full object-cover shadow-md"
            />

            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold mb-1">Nirmal Choudhary</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Founder of YOU
              </p>
              <div className="bg-white dark:bg-[#2b2b2b] p-4 rounded-xl shadow-inner text-gray-700 dark:text-gray-300">
                <p>
                  Hey there! I’m Nirmal, the creator of YOU — a platform built out of love for transformation and self-expression.
                  I believe everyone deserves to feel confident in their own skin, and that starts with the right tools, guidance, and community.
                  YOU is more than just a website — it’s a journey, and I’m so glad you’re on it with us. Let’s glow up, together! 💫
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-5 mt-5 text-xl text-blue-600 dark:text-blue-400">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
