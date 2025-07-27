// src/pages/styles/LoungewearCozycoreMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Fleece hoodie with joggers and slides.",
    image: "https://i.pinimg.com/564x/02/56/0e/02560e7f885becc2087e23be503c9483.jpg",
  },
  {
    id: 2,
    description: "Thermal top with cotton sweatpants and knit cap.",
    image: "https://i.pinimg.com/564x/2e/20/0e/2e200e08c9b1d72c2c538a9e55ccbe56.jpg",
  },
  {
    id: 3,
    description: "Oversized t-shirt and lounge shorts.",
    image: "https://i.pinimg.com/564x/bb/98/cd/bb98cd2ed2cf56a9611b4aa223b4cc8e.jpg",
  },
  {
    id: 4,
    description: "Robe over pajama pants and socks with slides.",
    image: "https://i.pinimg.com/564x/f2/f1/7c/f2f17c4e4fc4cc605c1cfde94b5f1e77.jpg",
  },
  {
    id: 5,
    description: "Hoodie and matching sweatsuit set.",
    image: "https://i.pinimg.com/564x/7d/ae/c1/7daec18058f201c708c43c014f16e80e.jpg",
  },
  {
    id: 6,
    description: "Crewneck sweatshirt with thermal joggers.",
    image: "https://i.pinimg.com/564x/e3/06/4a/e3064a2a2d38c68e3e2bded353de4de5.jpg",
  },
  {
    id: 7,
    description: "Loose long-sleeve tee with fleece pants.",
    image: "https://i.pinimg.com/564x/6f/b7/c4/6fb7c4e5eb29554a25f0a09057f53b25.jpg",
  },
  {
    id: 8,
    description: "Graphic tee and plaid lounge pants.",
    image: "https://i.pinimg.com/564x/ef/62/b6/ef62b6a69e0d5e748055c54fc4f3e7f0.jpg",
  },
  {
    id: 9,
    description: "Oversized hoodie with wool socks and coffee mug.",
    image: "https://i.pinimg.com/564x/b6/f0/ce/b6f0cef9b631fb35b12fa9df05464602.jpg",
  },
  {
    id: 10,
    description: "Minimalist loungewear set in earthy tones.",
    image: "https://i.pinimg.com/564x/f6/42/c7/f642c7fa54e4082f3cf31784d962af16.jpg",
  },
];

const LoungewearCozycoreMale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">🛋️ Loungewear / Cozycore (Male)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={image} alt="cozywear" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LoungewearCozycoreMale;
