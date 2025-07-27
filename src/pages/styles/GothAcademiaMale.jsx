// src/pages/styles/GothAcademiaMale.jsx
import React from "react";

const maleOutfits = [
  {
    id: 1,
    description: "Black turtleneck with high-waisted trousers and round glasses.",
    image: "https://i.pinimg.com/736x/64/f0/99/64f09946c924503b6b79a51c6e0b3c7a.jpg"
  },
  {
    id: 2,
    description: "Wool coat over vest and slacks with leather boots.",
    image: "https://i.pinimg.com/736x/28/c3/9e/28c39e18eced45d4d8e135b5861d5b52.jpg"
  },
  {
    id: 3,
    description: "Charcoal trench coat with button-up shirt and satchel.",
    image: "https://i.pinimg.com/736x/e6/5b/d6/e65bd6557c1772589e1786fc3c296063.jpg"
  },
  {
    id: 4,
    description: "Dark plaid pants with combat boots and vintage books.",
    image: "https://i.pinimg.com/736x/3a/52/77/3a5277d2481458e91b2a11869be4c348.jpg"
  },
  {
    id: 5,
    description: "Black overcoat, vest, and oxford shoes.",
    image: "https://i.pinimg.com/736x/7e/18/8c/7e188c0ac7f2449b7a1a15523c7e5852.jpg"
  },
  {
    id: 6,
    description: "Layered sweaters with dark trousers and rings.",
    image: "https://i.pinimg.com/736x/08/7e/10/087e1023b8cb8440f7a78c49ec9838e3.jpg"
  },
  {
    id: 7,
    description: "Long coat with scarf and lace-up boots.",
    image: "https://i.pinimg.com/736x/e2/cf/0c/e2cf0c30b0cd0642b52140b0101d3a42.jpg"
  },
  {
    id: 8,
    description: "Dark academia layering with gloves and satchel bag.",
    image: "https://i.pinimg.com/736x/cd/50/89/cd5089bba3ac252c0846b2e1c878df6a.jpg"
  },
  {
    id: 9,
    description: "High-collar shirt, suspenders, and trench pants.",
    image: "https://i.pinimg.com/736x/56/03/6a/56036ad1aa2e6e1140c361e15a3a351a.jpg"
  },
  {
    id: 10,
    description: "Layered black vest and longline coat with formal shoes.",
    image: "https://i.pinimg.com/736x/43/1f/61/431f61b87570136d3c84e8ec2b835c3b.jpg"
  }
];

const GothAcademiaMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🖤 Goth/Dark Academia for Men</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {maleOutfits.map((outfit) => (
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

export default GothAcademiaMale;
