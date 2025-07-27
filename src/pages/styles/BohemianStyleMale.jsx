// src/pages/styles/BohemianStyleMale.jsx
import React from 'react';

const bohemianOutfits = [
  {
    title: 'Printed Shirt + Linen Pants',
    img: 'https://images.unsplash.com/photo-1593032465174-9aa2c05345c9',
  },
  {
    title: 'Denim Jacket + Harem Pants',
    img: 'https://images.unsplash.com/photo-1603574640351-763d07f1ee4f',
  },
  {
    title: 'Poncho + Distressed Jeans',
    img: 'https://images.unsplash.com/photo-1591047139829-d91b417c06e5',
  },
  {
    title: 'Patterned T-shirt + Shorts + Sandals',
    img: 'https://images.unsplash.com/photo-1599642714073-14ed804b75b6',
  },
  {
    title: 'Floral Shirt + Wide-Leg Pants',
    img: 'https://images.unsplash.com/photo-1602810310262-b14913435f44',
  },
  {
    title: 'Earth-Tone Hoodie + Joggers',
    img: 'https://images.unsplash.com/photo-1576671086671-cfa42f218ba3',
  },
  {
    title: 'Loose Kurta + Cropped Pants',
    img: 'https://images.unsplash.com/photo-1595250642565-21960b9567f1',
  },
  {
    title: 'Oversized Tee + Flared Jeans',
    img: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98',
  },
  {
    title: 'Handmade Vest + Cotton Trousers',
    img: 'https://images.unsplash.com/photo-1622052542835-0c76285ac9c2',
  },
  {
    title: 'Slouchy Sweater + Cargo Pants',
    img: 'https://images.unsplash.com/photo-1622015522123-5ad667b7ecb5',
  },
];

const BohemianStyleMale = () => {
  return (
    <div className="pt-24 px-6 pb-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Bohemian Style for Men</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bohemianOutfits.map((outfit, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <img src={outfit.img} alt={outfit.title} className="w-full h-64 object-cover rounded-lg mb-3" />
            <h2 className="text-lg font-semibold">{outfit.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BohemianStyleMale;
