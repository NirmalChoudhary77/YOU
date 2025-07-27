import React, { useState } from "react";
import { motion } from "framer-motion";
import GenderToggle from "../../components/GenderToggle";

const femaleHairstyles = [
  {
    name: "Side-Swept Bangs",
    desc: "Softens the forehead and balances the chin.",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    name: "Chin-Length Bob",
    desc: "Adds width to the jawline, balancing the heart shape.",
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "Loose Waves",
    desc: "Soft curls below the ear widen the lower half of the face.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
  {
    name: "Shoulder-Length Layers",
    desc: "Adds volume below the cheekbones to balance the narrow jaw.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Long Side Part",
    desc: "Breaks up forehead width with a diagonal flow.",
    img: "https://images.pexels.com/photos/2065206/pexels-photo-2065206.jpeg",
  },
  {
    name: "Wavy Lob",
    desc: "Modern and flattering — adds curve at the jawline.",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    name: "Curtain Bangs",
    desc: "Frames both temples and jaw softly.",
    img: "https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg",
  },
  {
    name: "Low Bun with Tendrils",
    desc: "Brings focus down and frames the lower face.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Textured Shag",
    desc: "Edgy layers for volume and width below the ears.",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Face-Framing Layers",
    desc: "Draws attention inward and softens features.",
    img: "https://images.pexels.com/photos/2748351/pexels-photo-2748351.jpeg",
  },
];

const maleHairstyles = [
  {
    name: "Textured Crop",
    desc: "Messy texture breaks up forehead width.",
    img: "https://images.pexels.com/photos/3617561/pexels-photo-3617561.jpeg",
  },
  {
    name: "Side Part with Volume",
    desc: "Adds asymmetry and focus to the mid-face.",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
  {
    name: "Fringe",
    desc: "Covers part of the forehead, balancing proportions.",
    img: "https://images.pexels.com/photos/5059560/pexels-photo-5059560.jpeg",
  },
  {
    name: "Faux Hawk",
    desc: "Builds volume on top and narrows focus toward the chin.",
    img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
  },
  {
    name: "Tapered Fade",
    desc: "Clean taper adds sharpness and length to the jaw.",
    img: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg",
  },
  {
    name: "Pompadour",
    desc: "Adds volume at the crown and distracts from a wider forehead.",
    img: "https://images.pexels.com/photos/1707843/pexels-photo-1707843.jpeg",
  },
  {
    name: "Comb Over",
    desc: "Classic parting with volume that draws downwards.",
    img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg",
  },
  {
    name: "Layered Medium Length",
    desc: "Soft layers add width lower on the face.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Short Quiff",
    desc: "Lifts upward while tapering to soften the chin.",
    img: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg",
  },
  {
    name: "Buzz Cut with Beard",
    desc: "Simple, clean cut that balances face shape with beard volume.",
    img: "https://images.pexels.com/photos/1708973/pexels-photo-1708973.jpeg",
  },
];

const HeartFace = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hairstyles for Heart-Shaped Faces</h1>
        <p className="text-gray-600 dark:text-gray-300">
          These hairstyles help minimize forehead width and highlight your stunning jawline.
        </p>
      </div>

      {/* Toggle Component */}
      <GenderToggle gender={gender} setGender={setGender} />

      {/* Styles */}
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

export default HeartFace;
