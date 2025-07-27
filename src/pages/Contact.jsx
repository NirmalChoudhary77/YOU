// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    console.log(form);
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
    className="pt-24 px-6 pb-10"
  >
    <div className="pt-24 px-6 pb-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-200 text-center mb-6">
        Have a question, suggestion, or just want to say hi? We’d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-[#FFDDC1] text-black dark:text-black py-3 rounded-full hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    </motion.div>
  );
};

export default Contact;
