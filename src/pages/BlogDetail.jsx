import { motion } from 'framer-motion';

import { blogs } from '@/data/blogs';
import { useParams, useNavigate } from 'react-router-dom';

const blogImages = {
  Skincare: [
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  ],
  'Styling Tips': [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  ],
  Hairstyles: [
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  ],
};


const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => String(b.id) === String(id));
  if (!blog) {
    return <div className="pt-24 px-6 pb-10 max-w-3xl mx-auto text-center">Blog not found.</div>;
  }
  const images = blogImages[blog.category] || [];
  const imgSrc = images[blog.id % images.length] || images[0];
  // Example tags and author
  const tags = [blog.category, 'Glow-Up', 'Trending'];
  const author = 'GlowUp Team';

  // More blog details (example)
  const details = {
    Skincare: 'This blog covers expert skincare routines, product recommendations, and seasonal tips for all skin types. Learn how to build a regimen that works for you and discover the science behind glowing skin.',
    'Styling Tips': 'Explore fashion advice, wardrobe essentials, and style inspiration for every body type. Find your signature look and boost your confidence with creative styling ideas.',
    Hairstyles: 'Stay ahead of the trends with hairstyle guides, care tips for colored hair, and quick looks for busy mornings. Get inspired by the latest cuts and colors.',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 pb-10 max-w-3xl mx-auto"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-full bg-primary text-white dark:bg-primary-foreground dark:text-primary hover:bg-opacity-80 transition"
      >
        ← Back
      </button>
      <div className="bg-white dark:bg-[#232323] p-0 rounded-xl shadow-xl overflow-hidden">
        <div className="relative w-full h-64 md:h-80">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
          <div className="absolute bottom-4 left-4 flex gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow">{tag}</span>
            ))}
          </div>
        </div>
        <div className="p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 text-center text-primary dark:text-primary-foreground">{blog.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-400">By {author}</span>
            <span className="text-xs text-gray-400">| {blog.date}</span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mt-2 text-center leading-relaxed">{blog.content}</p>
          <div className="text-base text-gray-500 dark:text-gray-400 mt-4 mb-6 text-center">
            {details[blog.category]}
          </div>
          <div className="flex gap-4 mt-8">
            <button
              className="px-4 py-2 rounded-full bg-primary text-white dark:bg-primary-foreground dark:text-primary hover:bg-opacity-80 transition"
              onClick={() => window.open(window.location.href, '_blank')}
            >
              Share
            </button>
            <button
              className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              onClick={() => navigate(-1)}
            >
              Back to Blogs
            </button>
          </div>
          {/* Comment Section */}
          <div className="w-full mt-8">
            <h2 className="text-xl font-bold mb-4 text-left">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Your name"
                value={commentName}
                onChange={e => setCommentName(e.target.value)}
                className="px-4 py-2 rounded border bg-white dark:bg-[#232323] text-gray-700 dark:text-gray-200 shadow focus:outline-none flex-1"
                required
              />
              <input
                type="text"
                placeholder="Your comment"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                className="px-4 py-2 rounded border bg-white dark:bg-[#232323] text-gray-700 dark:text-gray-200 shadow focus:outline-none flex-2"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-primary text-white dark:bg-primary-foreground dark:text-primary font-semibold shadow hover:bg-opacity-80 transition"
              >
                Post
              </button>
            </form>
            <div className="space-y-4">
              {comments.map((c, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <span className="font-semibold text-primary dark:text-primary-foreground">{c.name}</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-200">{c.text}</span>
                </div>
              ))}
              {comments.length === 0 && (
                <div className="text-gray-400">No comments yet. Be the first to comment!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
