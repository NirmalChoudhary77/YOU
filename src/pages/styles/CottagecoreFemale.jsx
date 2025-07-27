// src/pages/styles/CottagecoreFemale.jsx
import React from "react";

const femaleOutfits = [
  {
    id: 1,
    description: "Floral midi dress with puff sleeves and lace-up boots.",
    image: "https://i.pinimg.com/736x/bc/31/68/bc3168b380b7ae2f12505f828bc2403a.jpg"
  },
  {
    id: 2,
    description: "White peasant blouse with tiered skirt and straw hat.",
    image: "https://i.pinimg.com/736x/23/c2/61/23c2610556e39760d894c76891d54259.jpg"
  },
  {
    id: 3,
    description: "Oversized cardigan over a floral maxi dress.",
    image: "https://i.pinimg.com/736x/b5/f1/f1/b5f1f13b0e1ce616b221d0f80181a3a0.jpg"
  },
  {
    id: 4,
    description: "Lace dress with vintage belt and sandals.",
    image: "https://i.pinimg.com/736x/5f/56/12/5f5612a1546fa96e5f0dc5df054f7f01.jpg"
  },
  {
    id: 5,
    description: "Ruffled blouse, high-waisted trousers, and woven bag.",
    image: "https://i.pinimg.com/736x/2e/08/63/2e08637436fa7efadcc0e632c02bc351.jpg"
  },
  {
    id: 6,
    description: "Button-front dress with apron and straw tote.",
    image: "https://i.pinimg.com/736x/6d/16/56/6d16567cda02e12e1f3967bc11db1dc5.jpg"
  },
  {
    id: 7,
    description: "Pastel blouse tucked into pleated skirt.",
    image: "https://i.pinimg.com/736x/f3/8b/29/f38b29766e06c6e4d14496ef94a9b1a3.jpg"
  },
  {
    id: 8,
    description: "Gingham dress with lace socks and loafers.",
    image: "https://i.pinimg.com/736x/49/e4/0e/49e40e3ad17be27307d318b9c1c2f5e4.jpg"
  },
  {
    id: 9,
    description: "Crochet sweater and wide-brim hat.",
    image: "https://i.pinimg.com/736x/1d/5e/96/1d5e9698dc4a7fc001243b53c2d01e56.jpg"
  },
  {
    id: 10,
    description: "Flowy maxi skirt with tucked-in floral tank.",
    image: "https://i.pinimg.com/736x/0a/0c/29/0a0c29fc93d2ac8973cfd0207ae2cf20.jpg"
  }
];

const CottagecoreFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🌼 Cottagecore Style for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {femaleOutfits.map((outfit) => (
          <div key={outfit.id} className="bg-white rounded-xl shadow-md overflow-hidden">
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

export default CottagecoreFemale;
