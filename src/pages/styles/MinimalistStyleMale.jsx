import React from 'react';
import { motion } from 'framer-motion';

const outfits = [
  {
    title: 'White Tee + Slim Jeans + White Sneakers',
    image: '/images styles/minimalistic/2.jpg',
  },
  {
    title: 'Black Shirt + Beige Chinos + Loafers',
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg',
  },
  {
    title: 'Grey Hoodie + Black Jeans + Minimal Trainers',
    image: 'https://images.pexels.com/photos/2426062/pexels-photo-2426062.jpeg',
  },
  {
    title: 'Navy Button-Up + Slim Trousers + White Sneakers',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
  },
  {
    title: 'Black Turtleneck + Wool Pants + Chelsea Boots',
    image: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg',
  },
  {
    title: 'Crewneck Sweatshirt + Drawstring Pants + Trainers',
    image: 'https://images.pexels.com/photos/775398/pexels-photo-775398.jpeg',
  },
  {
    title: 'White Linen Shirt + Khaki Pants + Sandals',
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg',
  },
  {
    title: 'Charcoal Henley + Dark Jeans + Desert Boots',
    image: 'https://images.pexels.com/photos/277583/pexels-photo-277583.jpeg',
  },
  {
    title: 'Neutral Bomber Jacket + Tee + Slim Jeans',
    image: 'https://images.pexels.com/photos/1064069/pexels-photo-1064069.jpeg',
  },
  {
    title: 'Oversized Tee + Tailored Shorts + Slip-ons',
    image: 'https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg',
  },
];

const MinimalistStyleMale = () => {
  return (
    <motion.div
      className="min-h-screen pt-24 px-6 pb-16 bg-white dark:bg-[#1a1a1a]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
        👔 Minimalist Style Ideas for Men
      </h1>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {outfits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            <div className="w-full aspect-[3/4] min-h-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                style={{ minHeight: 0 }}
              />
            </div>
            <div className="p-4 flex-1 flex items-center justify-center">
              <h3 className="text-base md:text-lg font-semibold text-center dark:text-white break-words">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MinimalistStyleMale;
