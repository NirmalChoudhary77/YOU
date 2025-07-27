// src/pages/styles/Y2KMale.jsx
import React from "react";

const y2kMaleOutfits = [
  {
    id: 1,
    description: "Oversized graphic tee with baggy cargo pants and chunky sneakers.",
    image: "https://i.pinimg.com/736x/ff/2a/e4/ff2ae44db8b77226173f455b217f0c9a.jpg"
  },
  {
    id: 2,
    description: "Denim jacket with flared jeans and tinted sunglasses.",
    image: "https://i.pinimg.com/736x/5e/77/07/5e77074e9cda4720f312204be44f3e46.jpg"
  },
  {
    id: 3,
    description: "Mesh shirt layered over tank top with wide-leg jeans.",
    image: "https://i.pinimg.com/736x/d1/65/88/d16588df2e96f00824479c55bb1d2ed1.jpg"
  },
  {
    id: 4,
    description: "Color-blocked windbreaker and retro joggers.",
    image: "https://i.pinimg.com/736x/d7/e6/13/d7e61363dd176ec14c244fce9831c97e.jpg"
  },
  {
    id: 5,
    description: "Sleeveless crop vest with layered chains and loose pants.",
    image: "https://i.pinimg.com/736x/79/5c/30/795c30391f8a40e2ffecb81464895d40.jpg"
  },
  {
    id: 6,
    description: "Ribbed zip-up sweater with beanie and bootcut jeans.",
    image: "https://i.pinimg.com/736x/fd/94/79/fd9479d5b84246a91c186c38571a05ec.jpg"
  },
  {
    id: 7,
    description: "Rugged flannel with flared pants and vintage belt.",
    image: "https://i.pinimg.com/736x/e1/c6/f8/e1c6f88ae9f637b6d0c7b1f66c56ef3a.jpg"
  },
  {
    id: 8,
    description: "Techwear bomber with metallic pants.",
    image: "https://i.pinimg.com/736x/8e/bb/93/8ebb9342d7477bcf108c9b37463e09bb.jpg"
  },
  {
    id: 9,
    description: "Double denim with accessories and Converse.",
    image: "https://i.pinimg.com/736x/2a/e7/3a/2ae73a1276b9c47190e763c10f7a49db.jpg"
  },
  {
    id: 10,
    description: "Nylon hoodie with side-zip joggers and a bucket hat.",
    image: "https://i.pinimg.com/736x/bb/89/bf/bb89bf6a553b5c0196d6264ac3b9e462.jpg"
  }
];

const Y2KMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🧢 Y2K Style for Men</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {y2kMaleOutfits.map((outfit) => (
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

export default Y2KMale;
