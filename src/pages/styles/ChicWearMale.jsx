import React from "react";
import { motion } from "framer-motion";

const outfits = [
  {
    title: "Blazer + Turtleneck + Dress Pants",
    img: "https://images.pexels.com/photos/15881080/pexels-photo-15881080/free-photo-of-man-in-blazer-and-turtleneck.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Double-Breasted Suit + Loafers",
    img: "https://images.pexels.com/photos/10584260/pexels-photo-10584260.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "White Shirt + Slim Pants + Chelsea Boots",
    img: "https://images.pexels.com/photos/15307990/pexels-photo-15307990/free-photo-of-young-man-in-white-shirt-posing.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Neutral Blazer + Casual Tee + Jeans",
    img: "https://images.pexels.com/photos/18511404/pexels-photo-18511404/free-photo-of-man-in-a-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Beige Overcoat + Black Trousers + Sunglasses",
    img: "https://images.pexels.com/photos/17906927/pexels-photo-17906927/free-photo-of-man-in-beige-overcoat-and-black-pants.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Tailored Shirt + Wool Pants + Loafers",
    img: "https://images.pexels.com/photos/7697315/pexels-photo-7697315.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Casual Suit + White Sneakers",
    img: "https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Grey Turtleneck + Overcoat + Chinos",
    img: "https://images.pexels.com/photos/7691090/pexels-photo-7691090.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Structured Blazer + Dark Jeans",
    img: "https://images.pexels.com/photos/16947492/pexels-photo-16947492/free-photo-of-man-in-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Striped Shirt + Khaki Pants + Loafers",
    img: "https://images.pexels.com/photos/18074834/pexels-photo-18074834/free-photo-of-man-in-striped-shirt-and-pants.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ChicWearMale = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="pt-24 px-6 pb-10 max-w-6xl mx-auto bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">🧥 Chic Wear Outfit Ideas for Men</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {outfits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            <div className="w-full aspect-[3/4] min-h-0">
              <img
                src={item.img}
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

export default ChicWearMale;
