// src/pages/styles/ClassyElegantFemale.jsx
import React from 'react';

const classyFemaleOutfits = [
  {
    title: "White Blazer + Trousers + Nude Heels",
    image: "https://i.pinimg.com/originals/72/f9/ed/72f9ed3bb5e8ad789c4bbf79d5b5d11c.jpg"
  },
  {
    title: "Black Dress + Pearl Necklace + Pumps",
    image: "https://i.pinimg.com/originals/17/0f/60/170f60f9d191c7d8a1b0c1b265f39d66.jpg"
  },
  {
    title: "Silk Blouse + Pencil Skirt + Stilettos",
    image: "https://i.pinimg.com/originals/08/3e/62/083e62c4e3a0d6ae5b7e9604aa5aef5f.jpg"
  },
  {
    title: "Monochrome Suit + Gold Watch",
    image: "https://i.pinimg.com/originals/f3/84/30/f38430f3b339f4ae8993ec3f9d6071e3.jpg"
  },
  {
    title: "Beige Trench Coat + Black Pants + Boots",
    image: "https://i.pinimg.com/originals/47/88/11/478811d7f71d16f8fdf9e730776c0d10.jpg"
  },
  {
    title: "Satin Midi Dress + Minimal Jewelry",
    image: "https://i.pinimg.com/originals/eb/88/87/eb8887e59971613d994e2151e4a4171e.jpg"
  },
  {
    title: "High Neck Top + Tailored Culottes",
    image: "https://i.pinimg.com/originals/c1/8b/b9/c18bb9e4de8f853d899502baf2367480.jpg"
  },
  {
    title: "Blouse + High Waist Slacks + Heels",
    image: "https://i.pinimg.com/originals/14/f2/29/14f2297b0863f59340a8d6f8e39f1f1a.jpg"
  },
  {
    title: "Tweed Blazer + Mini Skirt + Tights",
    image: "https://i.pinimg.com/originals/c2/d7/17/c2d717b5b09b573fcd2d62cb96fc9a7c.jpg"
  },
  {
    title: "Wrap Dress + Belt + Clutch",
    image: "https://i.pinimg.com/originals/3e/07/30/3e07303ed3069f61a42deab01e26aabc.jpg"
  },
];

const ClassyElegantFemale = () => (
  <div className="p-6 pt-24">
    <h2 className="text-3xl font-bold mb-6 text-center">👗 Classy & Elegant Outfits for Women</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {classyFemaleOutfits.map((outfit, index) => (
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

export default ClassyElegantFemale;
