import React, { useState } from "react";
import { motion } from "framer-motion";
import GenderToggle from "../../components/GenderToggle"; // 👈 Import reusable toggle

const femaleHairstyles = [
  {
    name: "Soft Waves",
    desc: "Adds texture and softens the angular jawline.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Layered Cut",
    desc: "Breaks strong lines with blended edges.",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Side-Swept Bangs",
    desc: "Minimizes forehead width and adds softness.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Long Bob (Lob)",
    desc: "A longer bob that balances the square face shape.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "Voluminous Curls",
    desc: "Creates movement and disguises harsh lines.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Curtain Bangs",
    desc: "Adds framing layers around cheekbones and jaw.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Textured Shag",
    desc: "Modern and edgy, helps soften sharp facial angles.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Low Side Ponytail",
    desc: "Draws focus away from the jawline.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Straight Hair with Side Part",
    desc: "Side parting breaks symmetry and flatters sharp jaws.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Updo with Volume on Top",
    desc: "Lifts the face and reduces squareness visually.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Side Part",
    desc: "Classic and structured, breaks the squareness evenly.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Textured Top with Fade",
    desc: "Adds volume and flow, contrasting sharp edges.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
  {
    name: "Pompadour",
    desc: "Lifts vertically and offsets a wide jawline.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Slick Back",
    desc: "Gives a polished look while drawing focus upward.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Undercut",
    desc: "Short sides with long top break harshness below.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
  {
    name: "Low Fade",
    desc: "Minimizes side volume and balances structure.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Messy Quiff",
    desc: "Informal volume that softens symmetry.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Buzz Cut with Beard",
    desc: "Minimalist cut, and beard helps blend the jawline.",
    img: "https://images.pexels.com/photos/1708973/pexels-photo-1708973.jpeg",
  },
  {
    name: "Fringe with Texture",
    desc: "Adds movement and softens the forehead area.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Adds height and draws focus inward from the jaw.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
];

const SquareFace = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Square Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Square faces have sharp, strong features. These hairstyles will soften and complement your angles.
        </p>
      </div>

      {/* 💡 Toggle Component */}
      <GenderToggle gender={gender} setGender={setGender} />

      {/* 💇‍♂️💇‍♀️ Hairstyles */}
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

export default SquareFace;
