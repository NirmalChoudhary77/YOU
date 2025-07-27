import React from 'react';
import { motion } from 'framer-motion';

const outfits = [
  {
    title: "Crop Top + High Waist Jeans",
    image: "https://i.pinimg.com/564x/8f/f4/62/8ff462abe76cb6fd2e1218e8c9b5be79.jpg",
  },
  {
    title: "Tucked Blouse + Paperbag Pants",
    image: "https://i.pinimg.com/564x/f1/6a/b4/f16ab4ddfb42271e5e505cf7427bb8e6.jpg",
  },
  {
    title: "Oversized Shirt + Shorts",
    image: "https://i.pinimg.com/564x/aa/4f/39/aa4f39728a70e85f7ec1375365d43876.jpg",
  },
  {
    title: "Sweater + Pleated Skirt",
    image: "https://i.pinimg.com/564x/58/d2/47/58d24739d94e0e2a00a4a457499c93b3.jpg",
  },
  {
    title: "Basic Tee + Joggers",
    image: "https://i.pinimg.com/564x/d3/d7/82/d3d7821956b5b8d7a43a9e8b8c8ecb8b.jpg",
  },
  {
    title: "Denim Jacket + Midi Dress",
    image: "https://i.pinimg.com/564x/0d/62/82/0d6282d7485a9fc7ec4f2c270914e632.jpg",
  },
  {
    title: "Tank Top + Flowy Trousers",
    image: "https://i.pinimg.com/564x/ea/d4/e1/ead4e15d0f6a69403cd7882602be71cf.jpg",
  },
  {
    title: "Cropped Hoodie + Leggings",
    image: "https://i.pinimg.com/564x/5e/88/f1/5e88f1d7f83a06de18e3ad6edaa25de3.jpg",
  },
  {
    title: "Ribbed Top + Wide-Leg Jeans",
    image: "https://i.pinimg.com/564x/1d/f3/b3/1df3b370a905bb9c4503b5a1b6891d1f.jpg",
  },
  {
    title: "Basic Blouse + Denim Shorts",
    image: "https://i.pinimg.com/564x/53/06/3a/53063af60184b7928656ad82e5c258aa.jpg",
  },
];

const CasualWearFemale = () => (
  <motion.div className="pt-24 px-6 pb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold mb-6 text-center">Casual Wear – Women</h2>
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

export default CasualWearFemale;
