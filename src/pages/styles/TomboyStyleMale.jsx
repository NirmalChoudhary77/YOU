// src/pages/styles/TomboyStyleMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Oversized black tee with baggy beige cargo pants.",
    image: "https://i.pinimg.com/564x/3b/e3/d3/3be3d3ce6cf221aa7287a79c4f3bd3bb.jpg",
  },
  {
    id: 2,
    description: "Striped shirt with oversized shorts and long socks.",
    image: "https://i.pinimg.com/564x/4b/18/f2/4b18f21473e4e5cdbdf244893d13a177.jpg",
  },
  {
    id: 3,
    description: "Crewneck sweater with khaki pants and dad sneakers.",
    image: "https://i.pinimg.com/564x/99/27/d5/9927d54d76085e7a108ba206f0aef2fd.jpg",
  },
  {
    id: 4,
    description: "Hoodie under puffer vest with wide-leg jeans.",
    image: "https://i.pinimg.com/564x/4a/e2/31/4ae2314a79003caa9018026df9a159c9.jpg",
  },
  {
    id: 5,
    description: "Simple white tank, joggers, and oversized shirt tied on waist.",
    image: "https://i.pinimg.com/564x/b1/18/03/b1180331b94f38953eb6ff65a9299678.jpg",
  },
  {
    id: 6,
    description: "Loose checkered flannel with neutral baggy trousers.",
    image: "https://i.pinimg.com/564x/d9/f4/fc/d9f4fc8b1e56ea6d6ebc271b3cf99151.jpg",
  },
  {
    id: 7,
    description: "All-black ensemble with long trench coat and boots.",
    image: "https://i.pinimg.com/564x/3d/b5/93/3db593430cb0541c3ae1032216811e56.jpg",
  },
  {
    id: 8,
    description: "Tank layered with an unbuttoned shirt and slouchy jeans.",
    image: "https://i.pinimg.com/564x/b6/b6/8b/b6b68b3fa0a470c8c118bd4f0f46d1bb.jpg",
  },
  {
    id: 9,
    description: "Bomber jacket with jogger pants and sneakers.",
    image: "https://i.pinimg.com/564x/b3/5e/07/b35e0723e6d72056c8dc229d9e02e4e2.jpg",
  },
  {
    id: 10,
    description: "Relaxed white hoodie with tan chinos and black boots.",
    image: "https://i.pinimg.com/564x/91/7f/56/917f56c81cc259e8cdaae2d04a38d4cf.jpg",
  },
];

const TomboyStyleMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🖤 Tomboy Style for Guys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {outfits.map((outfit) => (
          <div key={outfit.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={outfit.image} alt="outfit" className="w-full h-80 object-cover" />
            <div className="p-4">
              <p className="text-gray-700">{outfit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TomboyStyleMale;
