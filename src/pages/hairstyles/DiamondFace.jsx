import React, { useState } from "react";
import { motion } from "framer-motion";
import GenderToggle from "../../components/GenderToggle";

const femaleHairstyles = [
  {
    name: "Chin-Length Bob",
    desc: "Adds fullness around the jawline to balance narrow areas.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "Side-Swept Bangs",
    desc: "Softens cheekbones and adds width at the forehead.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Soft Waves",
    desc: "Gives volume below the cheeks for balance.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Layered Lob",
    desc: "Breaks sharp lines and draws focus to the lower face.",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Curtain Bangs",
    desc: "Frames the face from temples down, minimizing width at cheeks.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Voluminous Curls",
    desc: "Creates width and softness around the lower face.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Side Bun with Bangs",
    desc: "Pulls weight to one side and softens angular features.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Pixie Cut with Volume",
    desc: "Lifts crown height and complements defined cheekbones.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Long Layers with Center Part",
    desc: "Balances cheek width and elongates the face.",
    img: "https://images.pexels.com/photos/2065206/pexels-photo-2065206.jpeg",
  },
  {
    name: "Half-Up Style",
    desc: "Adds volume near the crown and lets strands fall around the jaw.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Messy Fringe",
    desc: "Covers some cheek width while keeping a modern, relaxed look.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
  {
    name: "Side Part",
    desc: "Breaks symmetry and adds shape to the upper face.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Taper Fade",
    desc: "Softens cheekbones with shorter sides and clean finish.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Pompadour",
    desc: "Draws focus up and away from the widest part of the face.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Side Swept Top",
    desc: "Adds flow to one side to reduce harsh cheek symmetry.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Lifts vertically and distracts from wide cheekbones.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
  {
    name: "Textured Crop",
    desc: "Adds rough layers that balance sharp facial angles.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Undercut with Fringe",
    desc: "Lengthens face visually and softens bone structure.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Brush Up",
    desc: "Vertical volume to stretch facial length and balance shape.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Buzz Cut with Beard",
    desc: "Minimalist top with jaw definition to widen the lower face.",
    img: "https://images.pexels.com/photos/1708973/pexels-photo-1708973.jpeg",
  },
];

const DiamondFace = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Diamond-Shaped Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Highlight your striking cheekbones and balance your narrow forehead and chin with these ideal hairstyles.
        </p>
      </div>

      {/* 👇 Gender Switcher */}
      <GenderToggle gender={gender} setGender={setGender} />

      {/* ✂️ Hairstyle Suggestions */}
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

export default DiamondFace;
