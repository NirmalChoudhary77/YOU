// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';

const Blog = () => {
  const categories = ['All', 'Skincare', 'Styling Tips', 'Hairstyles'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample images for each blog post (replace with your own assets if needed)
  const blogImages = {
    Skincare: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ],
    'Styling Tips': [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    ],
    Hairstyles: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    ],
  };

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 pb-10"
    >
      <div className="pt-24 px-6 pb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Blog & Articles</h1>
        <p className="text-gray-700 dark:text-gray-200 text-center mb-6">
          Stay updated with beauty, wellness & confidence tips curated just for YOU.
        </p>

        {/* Capsule Category Selector */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 shadow-sm focus:outline-none
                ${selectedCategory === category
                  ? 'bg-primary text-white dark:bg-primary-foreground dark:text-primary'
                  : 'bg-white dark:bg-[#232323] text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards for Selected Category */}
        <div className="space-y-8">
          {filteredBlogs.map((blog, idx) => {
            // Pick image based on blog category and index
            const images = blogImages[blog.category] || [];
            const imgSrc = images[idx % images.length] || images[0];
            return (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="block group"
              >
                <div className="bg-white dark:bg-[#232323] p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={blog.title}
                      className="w-full md:w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 group-hover:brightness-95"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{blog.title}</h3>
                    <p className="mb-2 text-gray-600 dark:text-gray-300">{blog.content}</p>
                    <span className="text-xs text-gray-400">Posted {blog.date}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
