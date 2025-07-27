import React, { useState } from "react";
import { motion } from "framer-motion";
import GenderToggle from "../../components/GenderToggle";

const femaleHairstyles = [
  {
    name: "Loose Waves",
    desc: "Adds width at cheek level and softens vertical length.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Side-Swept Bangs",
    desc: "Cuts forehead length and introduces horizontal volume.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Shoulder-Length Layers",
    desc: "Stops length at the shoulders and adds body to the sides.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Blunt Bob",
    desc: "Sharp cut below the chin visually shortens the face.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "Curtain Bangs",
    desc: "Breaks up the face vertically while adding width to the top.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Voluminous Curls",
    desc: "Adds fullness at the sides, making the face look rounder.",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Choppy Lob",
    desc: "Dynamic length with texture that reduces the vertical effect.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Soft Shag",
    desc: "Creates horizontal width while adding texture.",
    img: "https://images.pexels.com/photos/2065206/pexels-photo-2065206.jpeg",
  },
  {
    name: "Half-Up Bun",
    desc: "Keeps some volume down while pulling some hair up for shape.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Angled Bob",
    desc: "Visual trick to widen lower face and reduce length.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Crew Cut",
    desc: "Minimal length avoids elongating the face further.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Textured Fringe",
    desc: "Covers the forehead and adds width near the top.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Side Part",
    desc: "Classic style that interrupts length and adds asymmetry.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Brush Forward",
    desc: "Brings volume to the front and shortens vertical emphasis.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
  {
    name: "Tapered Crop",
    desc: "Short sides with soft edges balance sharp vertical length.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Adds height, but balances it with faded sides.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
  {
    name: "Messy Top with Fade",
    desc: "Creates lateral width through messy volume.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Pompadour with Side Part",
    desc: "Draws attention diagonally rather than vertically.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Buzz Cut with Beard",
    desc: "Simplifies top volume and emphasizes a square chin.",
    img: "https://images.pexels.com/photos/1708973/pexels-photo-1708973.jpeg",
  },
  {
    name: "Undercut Fringe",
    desc: "Breaks long face lines with fringe and adds texture.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
];

const OblongFace = () => {
  const [gender, setGender] = useState("female");
  const stylesToShow = gender === "female" ? femaleHairstyles : maleHairstyles;

  return (
    <motion.div
      className="pt-24 px-4 pb-16 bg-[#fff5f0] dark:bg-[#1a1a1a] text-black dark:text-white min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Oblong (Rectangle) Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Oblong faces benefit from volume and width. These hairstyles help shorten and balance your look.
        </p>
      </div>

      {/* 🧑‍🦰 Gender Selector */}
      <GenderToggle gender={gender} setGender={setGender} />

      {/* 💇 Styles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {stylesToShow.map((style, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md transition"
          >
            <img
              src={style.img}
              alt={style.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{style.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{style.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OblongFace;
