// src/pages/styles/KoreanFashionMale.jsx
import React from "react";

const maleOutfits = [
  {
    id: 1,
    description: "Oversized beige hoodie with tapered trousers and sneakers.",
    image: "https://i.pinimg.com/564x/3e/fc/26/3efc26d67e85de3f1cdb41d3fa5fdd50.jpg",
  },
  {
    id: 2,
    description: "Black turtleneck under checkered overcoat with loafers.",
    image: "https://i.pinimg.com/564x/e7/8d/38/e78d38754d9628c0a479f40e5cba2854.jpg",
  },
  {
    id: 3,
    description: "Striped shirt with ankle pants and canvas sneakers.",
    image: "https://i.pinimg.com/564x/9f/57/9c/9f579cd8bc7f11a2504c23f2f61b6aa0.jpg",
  },
  {
    id: 4,
    description: "Layered sweatshirt over a collared shirt with jeans.",
    image: "https://i.pinimg.com/564x/c6/69/7c/c6697c52d8c1440fa2743f92fdd064a2.jpg",
  },
  {
    id: 5,
    description: "Long camel coat with black turtleneck and slacks.",
    image: "https://i.pinimg.com/564x/c5/6d/0f/c56d0fd1531d106bfc1c2f48e458b39d.jpg",
  },
  {
    id: 6,
    description: "Pastel cardigan with white tee and cropped pants.",
    image: "https://i.pinimg.com/564x/5d/c1/f3/5dc1f301abf97a04e0fd4eb0414d18fc.jpg",
  },
  {
    id: 7,
    description: "Oversized blazer and tucked shirt with slacks.",
    image: "https://i.pinimg.com/564x/e3/f6/0d/e3f60d914ef7b7d9c9b6fa5f255a4c94.jpg",
  },
  {
    id: 8,
    description: "Sweater vest over white shirt with shorts.",
    image: "https://i.pinimg.com/564x/4b/f5/c7/4bf5c74a89c208da6ef9e1c8f29c7b5b.jpg",
  },
  {
    id: 9,
    description: "Denim jacket with black trousers and high-tops.",
    image: "https://i.pinimg.com/564x/11/55/16/115516ce5b707d60d146ef20437d1060.jpg",
  },
  {
    id: 10,
    description: "Graphic hoodie with joggers and dad sneakers.",
    image: "https://i.pinimg.com/564x/5f/14/36/5f14361a601a17aece0fd14cfb37a8ff.jpg",
  },
];

const KoreanFashionMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🇰🇷 Korean Fashion for Men</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {maleOutfits.map((outfit) => (
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

export default KoreanFashionMale;
