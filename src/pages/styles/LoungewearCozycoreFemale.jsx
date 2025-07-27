// src/pages/styles/LoungewearCozycoreFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Oversized hoodie with fleece leggings and fuzzy socks.",
    image: "https://i.pinimg.com/564x/f5/52/68/f55268c7a725d8777c2f59ef12f4b17b.jpg",
  },
  {
    id: 2,
    description: "Cotton co-ord set with joggers and long-sleeve tee.",
    image: "https://i.pinimg.com/564x/7c/85/8e/7c858e6b21bd9791d8479a1c02e12d6e.jpg",
  },
  {
    id: 3,
    description: "Knit sweater dress with wool socks and messy bun.",
    image: "https://i.pinimg.com/564x/7c/54/03/7c540360816038abc8b7981523dbe813.jpg",
  },
  {
    id: 4,
    description: "Fluffy robe over tank top and shorts.",
    image: "https://i.pinimg.com/564x/36/f2/fc/36f2fc003ed6fdcfb93d34e35563a949.jpg",
  },
  {
    id: 5,
    description: "Cloud-soft pajamas with scrunchie and slippers.",
    image: "https://i.pinimg.com/564x/e0/37/d5/e037d5e93862c01ae2453d42299bc2e6.jpg",
  },
  {
    id: 6,
    description: "Thermal long-sleeve and fleece joggers with headband.",
    image: "https://i.pinimg.com/564x/5d/3c/e6/5d3ce6fa4acdc65686ad0eb48f76ed30.jpg",
  },
  {
    id: 7,
    description: "Pastel hoodie and matching shorts with hot cocoa mug.",
    image: "https://i.pinimg.com/564x/3e/48/55/3e4855489e08dc69cf765a5f785ee83f.jpg",
  },
  {
    id: 8,
    description: "Sherpa pullover with cozy slippers and throw blanket.",
    image: "https://i.pinimg.com/564x/b0/f0/6f/b0f06f7b39d08db5eb7bc54cfc59705a.jpg",
  },
  {
    id: 9,
    description: "Boxy tee and lounge pants with soft knit cardigan.",
    image: "https://i.pinimg.com/564x/93/f3/16/93f3163376d8e02a27a3ccf6b6f95b3c.jpg",
  },
  {
    id: 10,
    description: "Cable-knit set with thick socks and a messy bun.",
    image: "https://i.pinimg.com/564x/c6/f0/46/c6f046dc087c208b0278a1c05c32d4f1.jpg",
  },
];

const LoungewearCozycoreFemale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">🧸 Loungewear / Cozycore (Female)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={image} alt="cozy outfit" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LoungewearCozycoreFemale;
