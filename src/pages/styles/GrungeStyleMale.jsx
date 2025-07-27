// src/pages/styles/GrungeStyleMale.jsx
import React from 'react';

const outfits = [
  {
    title: "Flannel Shirt + Ripped Jeans",
    image: "https://i.pinimg.com/564x/f3/55/c9/f355c980c84dc40c5b801203ebde5796.jpg",
  },
  {
    title: "Graphic Tee + Combat Boots",
    image: "https://i.pinimg.com/564x/39/3e/53/393e536a019474d2df9b4e251a3c372b.jpg",
  },
  {
    title: "Oversized Hoodie + Beanie",
    image: "https://i.pinimg.com/564x/34/d7/9a/34d79a5b002a4a9f45e6be9dfcfab758.jpg",
  },
  {
    title: "Denim Jacket + Black Jeans",
    image: "https://i.pinimg.com/564x/8e/62/5f/8e625f30f93176f3f14641b2d7e5f484.jpg",
  },
  {
    title: "Band Tee + Cargo Pants",
    image: "https://i.pinimg.com/564x/18/63/90/186390e8725e5115c94010fd19a06d78.jpg",
  },
  {
    title: "Plaid Pants + Black Shirt",
    image: "https://i.pinimg.com/564x/26/43/2f/26432f0a1863b331ba2f287038fa70f6.jpg",
  },
  {
    title: "Layered Chains + Leather Jacket",
    image: "https://i.pinimg.com/564x/60/0e/55/600e5521c2878fc1a2d53cf1fdb1f48b.jpg",
  },
  {
    title: "Distressed Denim + Skull Ring",
    image: "https://i.pinimg.com/564x/fc/17/56/fc1756275fa8038a8725ff4c2133a4c1.jpg",
  },
  {
    title: "Oversized Flannel + Dark Sneakers",
    image: "https://i.pinimg.com/564x/bb/4e/27/bb4e27649aa3b35b5a53d6a5ccf16b1c.jpg",
  },
  {
    title: "Torn Hoodie + Chain Belt",
    image: "https://i.pinimg.com/564x/2e/3c/e0/2e3ce0f6c57999e39d89d1887ea67ab3.jpg",
  },
];

const GrungeStyleMale = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-center mb-6">🖤 Grunge Style for Men</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {outfits.map((item, index) => (
        <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#1a1a1a]">
          <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
          <div className="p-4">
            <p className="font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GrungeStyleMale;
