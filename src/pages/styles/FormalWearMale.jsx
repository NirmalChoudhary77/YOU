// src/pages/styles/FormalWearMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Classic black tuxedo with bow tie.",
    image: "https://i.pinimg.com/564x/0b/1b/96/0b1b96e7b649d68e06fcb1ea4d9c682e.jpg",
  },
  {
    id: 2,
    description: "Navy blue suit with crisp white shirt.",
    image: "https://i.pinimg.com/564x/d6/3e/94/d63e94e6ee38156c8b8587d25c89480a.jpg",
  },
  {
    id: 3,
    description: "Double-breasted blazer with dress pants.",
    image: "https://i.pinimg.com/564x/fc/f2/80/fcf280b00e6788db473aa15a87be0419.jpg",
  },
  {
    id: 4,
    description: "White dinner jacket with black trousers.",
    image: "https://i.pinimg.com/564x/68/c9/f9/68c9f97f9fced2ef3450b7e130a2f0d0.jpg",
  },
  {
    id: 5,
    description: "Textured grey suit with tie and pocket square.",
    image: "https://i.pinimg.com/564x/cf/51/36/cf513615017a5e612d1d7581ae114cc1.jpg",
  },
  {
    id: 6,
    description: "Velvet tuxedo jacket with silk lapels.",
    image: "https://i.pinimg.com/564x/6f/e3/8f/6fe38f232f7f63f04f39be7c23ef59c7.jpg",
  },
  {
    id: 7,
    description: "Black shirt and trousers with gold accessories.",
    image: "https://i.pinimg.com/564x/b9/34/84/b934842a640a9f973a707dcb0e51f308.jpg",
  },
  {
    id: 8,
    description: "Three-piece charcoal suit with tie.",
    image: "https://i.pinimg.com/564x/b1/e5/58/b1e558e6c826fc1c3fd45c2fae0e9e43.jpg",
  },
  {
    id: 9,
    description: "Tweed suit with bowtie and leather shoes.",
    image: "https://i.pinimg.com/564x/c6/d2/85/c6d285fef45f94a6766d5209b7db79d5.jpg",
  },
  {
    id: 10,
    description: "Slim-fit black suit with silk tie and cufflinks.",
    image: "https://i.pinimg.com/564x/57/01/c7/5701c7e3f826c1e7c5b7f9b2969093c3.jpg",
  },
];

const FormalWearMale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">🤵 Formal / Evening Wear (Male)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={image} alt="formal outfit" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FormalWearMale;
