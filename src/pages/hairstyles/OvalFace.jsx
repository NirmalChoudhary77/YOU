import React, { useState } from "react";
import { motion } from "framer-motion";

const femaleHairstyles = [
  {
    name: "Long Layers",
    desc: "Adds softness and dimension while framing the face naturally.",
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
  },
  {
    name: "Blunt Bob",
    desc: "Provides sharp edges that contrast beautifully with an oval face.",
    img: "https://images.pexels.com/photos/2065206/pexels-photo-2065206.jpeg",
  },
  {
    name: "Pixie Cut",
    desc: "Highlights cheekbones and eyes, ideal for a bold look.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Side-Swept Bangs",
    desc: "Softens the forehead and adds a romantic touch.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Curtain Bangs",
    desc: "Perfectly frames your face while adding retro flair.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Beach Waves",
    desc: "Adds volume and movement with effortless beauty.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Slicked Back",
    desc: "Elegant and bold — ideal for showcasing your bone structure.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Top Knot",
    desc: "Draws attention upward, elongating your look stylishly.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Straight Mid-Length",
    desc: "A sleek, classic look that enhances symmetry.",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Messy Bun",
    desc: "Chic and casual, a timeless go-to for oval faces.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Crew Cut",
    desc: "Simple and neat — perfect for balanced proportions.",
    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
  },
  {
    name: "Side Part",
    desc: "Classic style that complements an oval face's symmetry.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Undercut",
    desc: "Contrasts volume on top with clean short sides.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
  {
    name: "Pompadour",
    desc: "Voluminous top balances oval shape and adds flair.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Taper Fade",
    desc: "Sharp and low-maintenance, perfect for daily wear.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Buzz Cut",
    desc: "Minimal and clean — draws focus to facial structure.",
    img: "https://images.pexels.com/photos/1708973/pexels-photo-1708973.jpeg",
  },
  {
    name: "Fringe",
    desc: "Adds youthfulness and balances forehead length.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Edgy style with a modern attitude and sharp contrast.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
  {
    name: "Slick Back",
    desc: "Sleek and strong — a powerful look for any setting.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Textured Crop",
    desc: "Short with choppy texture — adds personality and volume.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
];

const OvalFace = () => {
  const [gender, setGender] = useState("female");
  const stylesToShow = gender === "female" ? femaleHairstyles : maleHairstyles;

  return (
    <motion.div
      className="pt-24 px-4 pb-16 bg-[#fff5f0] dark:bg-[#1a1a1a] text-black dark:text-white min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Oval Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Oval faces are well-balanced and suit most hairstyles. See what's perfect for you.
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center items-center my-6">
        <button
          onClick={() => setGender(gender === "female" ? "male" : "female")}
          className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-600 transition"
        >
          Switch to {gender === "female" ? "Male" : "Female"} Styles
        </button>
      </div>

      {/* Hairstyles Grid */}
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

export default OvalFace;
