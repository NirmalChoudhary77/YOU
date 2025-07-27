// src/pages/styles/VintageRetroMale.jsx
import React from "react";

const outfits = [
  {
    title: "Corduroy Jacket & Graphic Tee",
    image: "https://i.pinimg.com/564x/f3/50/ef/f350efc6594c84b3fc4448a1c0f6f16f.jpg",
  },
  {
    title: "Turtleneck & Vintage Blazer",
    image: "https://i.pinimg.com/564x/1b/b6/eb/1bb6eb12199f92ab4c536e32ff9d32fc.jpg",
  },
  {
    title: "Denim on Denim",
    image: "https://i.pinimg.com/564x/44/f7/64/44f764c586d1fdc82690fa92c6cf3c2c.jpg",
  },
  {
    title: "Suspenders & Slim Trousers",
    image: "https://i.pinimg.com/564x/3e/e6/0d/3ee60d4e28d5fc30a47b41938994a9cb.jpg",
  },
  {
    title: "Flannel Shirt & Rolled-up Jeans",
    image: "https://i.pinimg.com/564x/43/cc/61/43cc61e97ac76c256f4cc9c15d10cd87.jpg",
  },
  {
    title: "Varsity Jacket & Loose Chinos",
    image: "https://i.pinimg.com/564x/e6/bb/25/e6bb2553a1c7c7c3439a90ddcb58e2a9.jpg",
  },
  {
    title: "Vintage Leather Bomber",
    image: "https://i.pinimg.com/564x/88/35/14/883514d822a4765b47e40ec24e9e5b18.jpg",
  },
  {
    title: "Retro Striped Polo & Khakis",
    image: "https://i.pinimg.com/564x/57/b3/61/57b361e37987de7d010d79b44c3d74c2.jpg",
  },
  {
    title: "Checkered Coat & Boots",
    image: "https://i.pinimg.com/564x/11/aa/63/11aa63e8ef0d2c7d02c615c30b2875ac.jpg",
  },
  {
    title: "Beret, Sweater Vest & Slacks",
    image: "https://i.pinimg.com/564x/4e/8b/ed/4e8bed52b655b3c7d17e1fa8f73ad22e.jpg",
  },
];

const VintageRetroMale = () => {
  return (
    <div className="pt-24 px-6 pb-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🕶️ Vintage / Retro Outfits for Men</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit, index) => (
          <div key={index} className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow hover:scale-105 transition p-4">
            <img src={outfit.image} alt={outfit.title} className="rounded-lg mb-3 w-full h-72 object-cover" />
            <h3 className="text-lg font-semibold">{outfit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VintageRetroMale;
