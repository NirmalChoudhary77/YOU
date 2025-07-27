import React from 'react';
import { motion } from 'framer-motion';

const outfits = [
  {
    title: 'White Blouse + Beige Trousers + Flats',
    image: 'https://images.pexels.com/photos/6311580/pexels-photo-6311580.jpeg',
  },
  {
    title: 'Oversized Blazer + Tank Top + Tapered Pants',
    image: 'https://images.pexels.com/photos/6311633/pexels-photo-6311633.jpeg',
  },
  {
    title: 'Black Turtleneck + High-Waisted Jeans + Ankle Boots',
    image: 'https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg',
  },
  {
    title: 'Monochrome Dress + Minimal Jewelry',
    image: 'https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg',
  },
  {
    title: 'Neutral Knit Sweater + Midi Skirt + White Sneakers',
    image: 'https://images.pexels.com/photos/5704840/pexels-photo-5704840.jpeg',
  },
  {
    title: 'White Shirt + Denim Jeans + Loafers',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
  },
  {
    title: 'Longline Coat + Straight Pants + Mules',
    image: 'https://images.pexels.com/photos/6311588/pexels-photo-6311588.jpeg',
  },
  {
    title: 'Silk Cami + Tailored Shorts + Slides',
    image: 'https://images.pexels.com/photos/6479608/pexels-photo-6479608.jpeg',
  },
  {
    title: 'Ribbed Crop Top + Wide-Leg Pants + Sandals',
    image: 'https://images.pexels.com/photos/6479586/pexels-photo-6479586.jpeg',
  },
  {
    title: 'Beige Cardigan + White Dress + Neutral Flats',
    image: 'https://images.pexels.com/photos/6479599/pexels-photo-6479599.jpeg',
  },
];

const MinimalistStyleFemale = () => {
  return (
    <motion.div
      className="min-h-screen pt-24 px-6 pb-16 bg-white dark:bg-[#1a1a1a]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
        👗 Minimalist Style Ideas for Women
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {outfits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MinimalistStyleFemale;
