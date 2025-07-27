// src/pages/styles/GrungeStyleFemale.jsx
import React from 'react';

const outfits = [
  {
    title: "Fishnet Tights + Oversized Tee",
    image: "https://i.pinimg.com/564x/2f/f2/35/2ff2350a6c2dc447f893a894781158e3.jpg",
  },
  {
    title: "Plaid Skirt + Band Tee",
    image: "https://i.pinimg.com/564x/21/fc/95/21fc953f1b1aab58f1fcfdf6b536d136.jpg",
  },
  {
    title: "Distressed Jeans + Crop Hoodie",
    image: "https://i.pinimg.com/564x/23/12/4e/23124ec6787a0b5ea9ad37eb46a5be00.jpg",
  },
  {
    title: "Combat Boots + Denim Jacket",
    image: "https://i.pinimg.com/564x/40/29/e4/4029e4c3bb2a35d1279a3cc34d47a0cc.jpg",
  },
  {
    title: "All-Black Look + Dark Lipstick",
    image: "https://i.pinimg.com/564x/25/79/92/257992cbe75c646a9b361126226b8f30.jpg",
  },
  {
    title: "Layered Tank + Leather Pants",
    image: "https://i.pinimg.com/564x/d3/f7/f1/d3f7f1903eae56bc66acac48e3dc6a8d.jpg",
  },
  {
    title: "Ripped Shorts + Thigh-Highs",
    image: "https://i.pinimg.com/564x/94/4f/97/944f978dd39c437cb64bdb3cc3e0837a.jpg",
  },
  {
    title: "Mesh Top + Denim Skirt",
    image: "https://i.pinimg.com/564x/dc/12/6a/dc126a822a5e0ec24a0ffea63e8d03ea.jpg",
  },
  {
    title: "Corset Top + Combat Boots",
    image: "https://i.pinimg.com/564x/ce/67/df/ce67df0f10d96d92716c6cb22b9c154e.jpg",
  },
  {
    title: "Graphic Hoodie + Beanie",
    image: "https://i.pinimg.com/564x/d0/7e/9c/d07e9c5f34aa8942a75522ef2150a1c5.jpg",
  },
];

const GrungeStyleFemale = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-center mb-6">🖤 Grunge Style for Women</h2>
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

export default GrungeStyleFemale;
