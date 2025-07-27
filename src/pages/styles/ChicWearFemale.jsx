import React from "react";
import { motion } from "framer-motion";

const outfits = [
  {
    title: "Silk Blouse + Tailored Trousers + Heels",
    img: "https://images.pexels.com/photos/17498768/pexels-photo-17498768/free-photo-of-woman-in-white-blouse-and-beige-trousers.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Off-Shoulder Dress + Statement Earrings + Heels",
    img: "https://images.pexels.com/photos/19549408/pexels-photo-19549408/free-photo-of-fashionable-woman-in-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Fitted Blazer + Turtleneck + Leather Pants",
    img: "https://images.pexels.com/photos/4664525/pexels-photo-4664525.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Monochrome Suit + Minimal Accessories",
    img: "https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Wrap Dress + Strappy Heels + Clutch",
    img: "https://images.pexels.com/photos/2065197/pexels-photo-2065197.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Pencil Skirt + Button-Down Shirt + Pumps",
    img: "https://images.pexels.com/photos/9496704/pexels-photo-9496704.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Blouse + Midi Skirt + Ankle Strap Heels",
    img: "https://images.pexels.com/photos/17725162/pexels-photo-17725162/free-photo-of-woman-standing-on-street.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Knit Dress + Belt + Overcoat",
    img: "https://images.pexels.com/photos/7047716/pexels-photo-7047716.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Trench Coat + Jeans + Heeled Boots",
    img: "https://images.pexels.com/photos/19106706/pexels-photo-19106706/free-photo-of-stylish-woman-wearing-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Linen Shirt + Wide-Leg Pants + Sandals",
    img: "https://images.pexels.com/photos/3746270/pexels-photo-3746270.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ChicWearFemale = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="pt-24 px-6 pb-10 max-w-6xl mx-auto bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">💄 Chic Wear Outfit Ideas for Women</h1>
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

export default ChicWearFemale;
