// src/pages/styles/Y2KFemale.jsx
import React from "react";

const y2kFemaleOutfits = [
  {
    id: 1,
    description: "Baby tee with low-rise jeans and platform sandals.",
    image: "https://i.pinimg.com/736x/13/90/f4/1390f400845e74a5a216b9f1973ed18f.jpg"
  },
  {
    id: 2,
    description: "Velour tracksuit with hoop earrings.",
    image: "https://i.pinimg.com/736x/4e/99/66/4e9966e73e73d85917e18ab388fa5de2.jpg"
  },
  {
    id: 3,
    description: "Asymmetrical top with miniskirt and leg warmers.",
    image: "https://i.pinimg.com/736x/3e/55/e7/3e55e75872c444f1233ac4d7b9174898.jpg"
  },
  {
    id: 4,
    description: "Crochet shrug with spaghetti strap top and baggy jeans.",
    image: "https://i.pinimg.com/736x/13/56/d2/1356d2f98ab365f1f54d03c72e469b59.jpg"
  },
  {
    id: 5,
    description: "Rhinestone tank top with butterfly clips and pleated skirt.",
    image: "https://i.pinimg.com/736x/32/d4/6f/32d46f2ebd7c5c2a5f8a08429c8433f4.jpg"
  },
  {
    id: 6,
    description: "Lace-up top with capri pants and tinted sunglasses.",
    image: "https://i.pinimg.com/736x/84/27/f8/8427f859b43782387f9fd88c0cc2f6b1.jpg"
  },
  {
    id: 7,
    description: "Fishnet sleeves with glitter crop top and baggy cargos.",
    image: "https://i.pinimg.com/736x/70/4f/c7/704fc786ff25d87f68ae86f51cb92a8e.jpg"
  },
  {
    id: 8,
    description: "Off-shoulder top with bootcut jeans and platform sneakers.",
    image: "https://i.pinimg.com/736x/16/b1/e1/16b1e18fcb49ac66c4c528db7e246ba6.jpg"
  },
  {
    id: 9,
    description: "Layered cami tops with micro skirt and small shoulder bag.",
    image: "https://i.pinimg.com/736x/c7/f9/88/c7f9882a91aa3997726e6b94f7f07c3c.jpg"
  },
  {
    id: 10,
    description: "Graphic halter top with patchwork jeans.",
    image: "https://i.pinimg.com/736x/d7/d3/58/d7d35810837d5c007c989e1cd9e7dc88.jpg"
  }
];

const Y2KFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">💖 Y2K Style for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {y2kFemaleOutfits.map((outfit) => (
          <div key={outfit.id} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={outfit.image} alt="outfit" className="w-full h-80 object-cover" />
            <div className="p-4">
              <p className="text-gray-800">{outfit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Y2KFemale;
