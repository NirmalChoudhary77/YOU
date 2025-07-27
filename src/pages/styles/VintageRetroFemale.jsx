// src/pages/styles/VintageRetroFemale.jsx
import React from "react";

const outfits = [
  {
    title: "Polka Dot Dress & Red Lip",
    image: "https://i.pinimg.com/564x/b5/f0/7d/b5f07dfccecc9c8616ab92e7a4074f68.jpg",
  },
  {
    title: "High Waist Trousers & Blouse",
    image: "https://i.pinimg.com/564x/9d/7c/34/9d7c34a418ad570bf9d6849dc9ecb0cc.jpg",
  },
  {
    title: "Plaid Skirt & Cardigan",
    image: "https://i.pinimg.com/564x/1b/ba/d1/1bbad10fc64744494ab1d165e16b6bb3.jpg",
  },
  {
    title: "Oversized Sunglasses & Trench",
    image: "https://i.pinimg.com/564x/3c/fb/43/3cfb4300610aa37d4ae2cd6a4f0d19cf.jpg",
  },
  {
    title: "Pinafore Dress & Turtle Neck",
    image: "https://i.pinimg.com/564x/27/60/d6/2760d6cb203cae6d2e979fc6171b5d01.jpg",
  },
  {
    title: "Vintage Floral Dress",
    image: "https://i.pinimg.com/564x/1b/e3/0b/1be30b253a02b0e7cb31c85c574ce482.jpg",
  },
  {
    title: "Mom Jeans & Graphic Tee",
    image: "https://i.pinimg.com/564x/33/e2/01/33e2018c9b0a445027b7dbe1f4d42de6.jpg",
  },
  {
    title: "Knitted Sweater & A-line Skirt",
    image: "https://i.pinimg.com/564x/91/c7/90/91c790f75e933c1569b2b364d7a4ce8e.jpg",
  },
  {
    title: "Retro Beret & Cat Eye Glasses",
    image: "https://i.pinimg.com/564x/e8/7e/76/e87e76944b391b2c5569a7301263a909.jpg",
  },
  {
    title: "Fur Coat & Red Boots",
    image: "https://i.pinimg.com/564x/66/7b/60/667b6054b5055c45e3bb5806e8ebbc04.jpg",
  },
];

const VintageRetroFemale = () => {
  return (
    <div className="pt-24 px-6 pb-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">💄 Vintage / Retro Outfits for Women</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {outfits.map((item, index) => (
          <div key={index} className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default VintageRetroFemale;
