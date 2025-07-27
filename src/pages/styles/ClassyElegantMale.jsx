// src/pages/styles/ClassyElegantMale.jsx
import React from 'react';

const classyMaleOutfits = [
  {
    title: "Navy Suit + White Shirt + Oxford Shoes",
    image: "https://i.pinimg.com/originals/f5/b3/60/f5b3602b3e1d34a7c869ca7719ab47f3.jpg"
  },
  {
    title: "Blazer + Turtleneck + Trousers",
    image: "https://i.pinimg.com/originals/5b/d4/2e/5bd42e5fdb2ae9a77f5695de25b18059.jpg"
  },
  {
    title: "Charcoal Suit + Tie + Pocket Square",
    image: "https://i.pinimg.com/originals/90/8d/51/908d510902bcfbf7f312d661e7e6aaf0.jpg"
  },
  {
    title: "White Shirt + Beige Chinos + Loafers",
    image: "https://i.pinimg.com/originals/1b/f2/70/1bf27063b8d6b13472441b137cc03edc.jpg"
  },
  {
    title: "Black Turtleneck + Checkered Pants + Dress Shoes",
    image: "https://i.pinimg.com/originals/4a/3f/1b/4a3f1b8e25e2a03a3c3e045cf3a39ae2.jpg"
  },
  {
    title: "Grey Suit + Tie + Watch",
    image: "https://i.pinimg.com/originals/b6/d4/ed/b6d4edfa4937ebc46bd91cb8852e8a77.jpg"
  },
  {
    title: "Double Breasted Suit + Monk Strap Shoes",
    image: "https://i.pinimg.com/originals/f6/d0/80/f6d080ab1e90215912662f0501e2e0ae.jpg"
  },
  {
    title: "Linen Shirt + Tailored Shorts + Loafers",
    image: "https://i.pinimg.com/originals/31/1d/f4/311df45cf1a4e8f76eb37cc4f4164523.jpg"
  },
  {
    title: "Black Blazer + Jeans + Formal Shoes",
    image: "https://i.pinimg.com/originals/2d/64/1d/2d641d7fa5a5cf83301eae2f659d25df.jpg"
  },
  {
    title: "White Shirt + Suit Vest + Slacks",
    image: "https://i.pinimg.com/originals/83/8e/88/838e8859e99d7f12284bc7399828dfe2.jpg"
  },
];

const ClassyElegantMale = () => (
  <div className="p-6 pt-24">
    <h2 className="text-3xl font-bold mb-6 text-center">🕴️ Classy & Elegant Outfits for Men</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {classyMaleOutfits.map((outfit, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={outfit.image} alt={outfit.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">{outfit.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ClassyElegantMale;
