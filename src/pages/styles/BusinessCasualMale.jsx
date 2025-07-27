// src/pages/styles/BusinessCasualMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Light blue shirt with chinos and loafers.",
    image: "https://i.pinimg.com/564x/c1/e2/7e/c1e27e8f28e0e708a7881efea22b2f29.jpg",
  },
  {
    id: 2,
    description: "Blazer over polo and tailored pants.",
    image: "https://i.pinimg.com/564x/e5/c1/f9/e5c1f90a3852e8402057892d0b4e16c5.jpg",
  },
  {
    id: 3,
    description: "Tucked-in oxford shirt with dark jeans and boots.",
    image: "https://i.pinimg.com/564x/f9/71/4a/f9714a78fef8c465610546fd372e6125.jpg",
  },
  {
    id: 4,
    description: "V-neck sweater over button-up with khaki pants.",
    image: "https://i.pinimg.com/564x/c0/5b/1d/c05b1d3ab1f180bd0cfec002f9c3e9ea.jpg",
  },
  {
    id: 5,
    description: "Grey blazer with black crew neck and beige pants.",
    image: "https://i.pinimg.com/564x/4e/80/5b/4e805b54d603bcbd0b81e2c31c3e8e61.jpg",
  },
  {
    id: 6,
    description: "Black shirt tucked into brown dress pants with belt.",
    image: "https://i.pinimg.com/564x/4b/f5/62/4bf562a2c1a4d9e739725c9e3ac5fef6.jpg",
  },
  {
    id: 7,
    description: "Cardigan layered over shirt with slim trousers.",
    image: "https://i.pinimg.com/564x/54/3a/16/543a16a9b404f90eb82e617b88817b4e.jpg",
  },
  {
    id: 8,
    description: "White shirt with navy slacks and loafers.",
    image: "https://i.pinimg.com/564x/1c/eb/09/1ceb095104ba9bb90a5e6202e0e39a9b.jpg",
  },
  {
    id: 9,
    description: "Pullover knit over collared shirt with cropped pants.",
    image: "https://i.pinimg.com/564x/98/27/43/982743fae4058c0d2d13c0e2c6dfb97e.jpg",
  },
  {
    id: 10,
    description: "Neutral turtleneck and blazer with slim-fit dress pants.",
    image: "https://i.pinimg.com/564x/c2/27/36/c22736a3d5f0211c25f6d34628b27ed5.jpg",
  },
];

const BusinessCasualMale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">💼 Business Casual (Male)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={image} alt="outfit" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BusinessCasualMale;
