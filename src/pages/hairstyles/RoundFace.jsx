import React, { useState } from "react";
import { motion } from "framer-motion";
import GenderToggle from "../../components/GenderToggle"; // ✅ Reusable toggle

const femaleHairstyles = [
  {
    name: "Long Straight Layers",
    desc: "Elongates the face and draws attention downward.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "High Ponytail",
    desc: "Adds vertical lift and sharpens round features.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Side-Swept Bangs",
    desc: "Breaks the roundness with asymmetry and flow.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Asymmetrical Bob",
    desc: "Sharp angles elongate and define the face.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Voluminous Top Bun",
    desc: "Adds height and balances round jawline.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Layered Lob",
    desc: "Soft waves with a longer bob help contour the face.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Deep Side Part",
    desc: "Creates asymmetry and elongates the overall look.",
    img: "https://images.pexels.com/photos/2065206/pexels-photo-2065206.jpeg",
  },
  {
    name: "Slick Back",
    desc: "Adds sleek height and confidence to the round structure.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Loose Waves",
    desc: "Adds softness while lengthening the visual shape.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Curtain Bangs with Layers",
    desc: "Frames the face while breaking circular contours.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Pompadour",
    desc: "Adds height to elongate round face shapes.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Spiky Hair",
    desc: "Vertical spikes stretch the face visually.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Side Part with Fade",
    desc: "Sharp sides contrast and contour a round shape.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Quiff",
    desc: "Volume in the front adds length and attitude.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
  {
    name: "High Fade",
    desc: "Clean sides with volume on top elongate the face.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Creates height and edge for a bolder silhouette.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
  {
    name: "Undercut with Comb Over",
    desc: "A modern style that adds structure and sharpness.",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Textured Fringe",
    desc: "Breaks roundness and adds depth to the forehead.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Brush Up",
    desc: "Lifts hair upward for vertical visual impact.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Short Mohawk Fade",
    desc: "Focuses height in the center for dramatic elongation.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
];

const RoundFace = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Round Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Round faces benefit from hairstyles that add height and angles. Let’s find your perfect match.
        </p>
      </div>

      {/* 👇 Reusable gender toggle */}
      <GenderToggle gender={gender} setGender={setGender} />

      {/* 💇‍♀️💇‍♂️ Hairstyle Cards */}
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

export default RoundFace;
