// src/pages/styles/TraditionalIndianFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Red Banarasi saree with gold jewelry and bun hairstyle.",
    image: "https://i.pinimg.com/564x/e6/83/c8/e683c8964f505a91cbf3f23e0ccbf372.jpg",
  },
  {
    id: 2,
    description: "Pastel lehenga with mirror work and jhumkas.",
    image: "https://i.pinimg.com/564x/e4/3a/f8/e43af89b2a3ac71e21426a21f0a3f93d.jpg",
  },
  {
    id: 3,
    description: "Silk saree with temple jewelry and bindi.",
    image: "https://i.pinimg.com/564x/e4/01/74/e4017476f0e2303153f4e0025f3f4a88.jpg",
  },
  {
    id: 4,
    description: "Chikankari Anarkali suit with mojaris.",
    image: "https://i.pinimg.com/564x/42/fd/35/42fd3527ae168d070a9a2bfbec1b0e4e.jpg",
  },
  {
    id: 5,
    description: "Sharara set with heavy dupatta and chandelier earrings.",
    image: "https://i.pinimg.com/564x/5f/93/b1/5f93b1b39147bb25c390720f297d9b7b.jpg",
  },
  {
    id: 6,
    description: "Floral printed lehenga with sleek ponytail.",
    image: "https://i.pinimg.com/564x/fb/e6/f7/fbe6f7c79dcf2c42dc681317a6906310.jpg",
  },
  {
    id: 7,
    description: "Bandhani saree with oxidized silver accessories.",
    image: "https://i.pinimg.com/564x/65/71/4a/65714a76cbb9e569e7dd4d67b2d1628b.jpg",
  },
  {
    id: 8,
    description: "Kanjeevaram saree with jasmine flowers in hair.",
    image: "https://i.pinimg.com/564x/26/39/c7/2639c74e8222ae52425746f4521c94f9.jpg",
  },
  {
    id: 9,
    description: "Indo-western saree gown with minimal jewelry.",
    image: "https://i.pinimg.com/564x/d2/ea/06/d2ea06dcf13cb3371e3c6355c6d03ee7.jpg",
  },
  {
    id: 10,
    description: "Ivory lehenga with pearl choker and soft curls.",
    image: "https://i.pinimg.com/564x/59/2c/9b/592c9b785f44f844ae5e55ac991cc384.jpg",
  },
];

const TraditionalIndianFemale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold text-center mb-6">🌸 Traditional Indian Wear (Female)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white shadow rounded-xl overflow-hidden">
          <img src={image} alt="Indian Traditional" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TraditionalIndianFemale;
