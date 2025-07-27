// src/pages/styles/KoreanFashionFemale.jsx
import React from "react";

const femaleOutfits = [
  {
    id: 1,
    description: "Pleated mini skirt with oversized sweater and sneakers.",
    image: "https://i.pinimg.com/564x/cf/f8/46/cff846579efbd2dc52408788f785c75a.jpg",
  },
  {
    id: 2,
    description: "Blazer dress with knee-high boots and beret.",
    image: "https://i.pinimg.com/564x/4b/77/64/4b7764502b4cdb6126fc6626894792c7.jpg",
  },
  {
    id: 3,
    description: "Pastel cardigan with high-waisted jeans and crossbody bag.",
    image: "https://i.pinimg.com/564x/53/3f/56/533f566bc65f8c7636b878f5d5cb0f78.jpg",
  },
  {
    id: 4,
    description: "Monochrome hoodie and mini skirt combo with platform sneakers.",
    image: "https://i.pinimg.com/564x/d2/e7/e3/d2e7e3e8fa52a6176c10c832e5e69c4e.jpg",
  },
  {
    id: 5,
    description: "Casual denim jacket over cropped top and slacks.",
    image: "https://i.pinimg.com/564x/b6/c7/9a/b6c79a6a3a01d3127a0d7989c22fc225.jpg",
  },
  {
    id: 6,
    description: "Mini dress with puffy sleeves and low heels.",
    image: "https://i.pinimg.com/564x/c6/90/28/c690281ce2b9fc19959fa238d9c2aa3e.jpg",
  },
  {
    id: 7,
    description: "Loose shirt tucked into flare pants and sling bag.",
    image: "https://i.pinimg.com/564x/90/45/9b/90459bcafc7fdc8ff640dc2e154eab8c.jpg",
  },
  {
    id: 8,
    description: "Cardigan and high-waisted shorts with socks and Mary Janes.",
    image: "https://i.pinimg.com/564x/dc/34/d9/dc34d9566e8dced30e26a47e8899e211.jpg",
  },
  {
    id: 9,
    description: "Long sleeve crop top with checkered mini skirt.",
    image: "https://i.pinimg.com/564x/b1/5a/16/b15a16bb37906cd27f0cb0c3525d33b4.jpg",
  },
  {
    id: 10,
    description: "Light blazer, jeans, and white heels.",
    image: "https://i.pinimg.com/564x/c2/92/6e/c2926e1c709ef42dbf0302c7cfdbb0fa.jpg",
  },
];

const KoreanFashionFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🇰🇷 Korean Fashion for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {femaleOutfits.map((outfit) => (
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

export default KoreanFashionFemale;
