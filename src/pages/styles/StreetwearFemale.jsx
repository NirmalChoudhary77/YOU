import React from "react";
import { motion } from "framer-motion";

const outfits = [
  {
    title: "Oversized Graphic Tee + Cargo Pants + White Sneakers",
    img: "https://images.pexels.com/photos/4215111/pexels-photo-4215111.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Crop Hoodie + High-Waist Biker Shorts + Chunky Trainers",
    img: "https://images.pexels.com/photos/5462687/pexels-photo-5462687.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Denim Jacket + Mini Skirt + Combat Boots",
    img: "https://images.pexels.com/photos/3056580/pexels-photo-3056580.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Vintage Windbreaker + Wide-Leg Pants + Retro Sneaks",
    img: "https://images.pexels.com/photos/9953298/pexels-photo-9953298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Oversized Blazer + Graphic Tee + Bike Shorts",
    img: "https://images.pexels.com/photos/7008975/pexels-photo-7008975.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Cropped Puffer + Cargo Joggers + Platform Boots",
    img: "https://images.pexels.com/photos/8649947/pexels-photo-8649947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Layered Tank + Plaid Shirt + Distressed Jeans",
    img: "https://images.pexels.com/photos/1130621/pexels-photo-1130621.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Graphic Sweatshirt Dress + Belt Bag + Sneakers",
    img: "https://images.pexels.com/photos/9785125/pexels-photo-9785125.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Crop Top + Oversized Cargo Pants + Slides",
    img: "https://images.pexels.com/photos/10111124/pexels-photo-10111124.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mesh Top + Bralette + Track Pants + Sporty Sandals",
    img: "https://images.pexels.com/photos/9498488/pexels-photo-9498488.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const StreetwearFemale = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="pt-24 px-6 pb-10 max-w-6xl mx-auto bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">👟 Streetwear Outfit Ideas for Women</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {outfits.map((look, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2a2a2a] shadow-md rounded-lg overflow-hidden transition hover:scale-105"
          >
            <img
              src={look.img}
              alt={look.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold">{look.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StreetwearFemale;
