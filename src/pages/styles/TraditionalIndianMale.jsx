// src/pages/styles/TraditionalIndianMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Beige kurta with white churidar and Nehru jacket.",
    image: "https://i.pinimg.com/564x/95/ed/70/95ed70c78b91a0a38ea3c5e7f57cb38c.jpg",
  },
  {
    id: 2,
    description: "Royal blue sherwani with golden embroidery and juttis.",
    image: "https://i.pinimg.com/564x/35/3a/10/353a10607c84d897c6fdc14c57a0f0aa.jpg",
  },
  {
    id: 3,
    description: "Pastel kurta set with printed dupatta.",
    image: "https://i.pinimg.com/564x/f3/eb/0d/f3eb0d1c42174fe3de70c8e7c92d9b85.jpg",
  },
  {
    id: 4,
    description: "Bandhgala with slim-fit trousers and brooch.",
    image: "https://i.pinimg.com/564x/13/53/ea/1353ea21e9c040e20647ed4e3f1c6d29.jpg",
  },
  {
    id: 5,
    description: "Ivory sherwani with red stole and safa.",
    image: "https://i.pinimg.com/564x/68/d6/fb/68d6fb6db82aa32f521527a4f43a3dc7.jpg",
  },
  {
    id: 6,
    description: "Asymmetric kurta with printed jacket.",
    image: "https://i.pinimg.com/564x/9d/3d/1c/9d3d1c289fc3b486229d47fdac2de2e1.jpg",
  },
  {
    id: 7,
    description: "Black pathani suit with sandals and beard.",
    image: "https://i.pinimg.com/564x/e8/7f/79/e87f799e7fa6979e493f93b7e2c32a91.jpg",
  },
  {
    id: 8,
    description: "Short kurta with jeans and mojaris for fusion look.",
    image: "https://i.pinimg.com/564x/0e/51/c8/0e51c85f9e5c295b51b69bcf91b49ea1.jpg",
  },
  {
    id: 9,
    description: "Maroon embroidered sherwani with beige churidar.",
    image: "https://i.pinimg.com/564x/f8/2f/97/f82f9730df9eec4ea7b7ee2e2c47f169.jpg",
  },
  {
    id: 10,
    description: "Mint green kurta with draped dupatta.",
    image: "https://i.pinimg.com/564x/1a/f1/e4/1af1e4207a38c80a192bbcc9942de6ff.jpg",
  },
];

const TraditionalIndianMale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold text-center mb-6">🕉️ Traditional Indian Wear (Male)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white shadow rounded-xl overflow-hidden">
          <img src={image} alt="Indian Outfit" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TraditionalIndianMale;
