// src/pages/styles/AndrogynousStyleMale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Oversized white shirt with relaxed tailored trousers.",
    image: "https://i.pinimg.com/564x/f7/54/94/f75494a6e426138724e0a0a8916a763f.jpg",
  },
  {
    id: 2,
    description: "Monochrome set with soft knit top and pleated pants.",
    image: "https://i.pinimg.com/564x/02/59/8e/02598e17fa90d972b81a7812d419ca77.jpg",
  },
  {
    id: 3,
    description: "Longline coat with black turtleneck and slim jeans.",
    image: "https://i.pinimg.com/564x/94/08/e3/9408e3602e30eb3fc65d93472a421b9e.jpg",
  },
  {
    id: 4,
    description: "Soft pastel sweater with white cropped trousers.",
    image: "https://i.pinimg.com/564x/3f/f4/bf/3ff4bf8cf43c487479df44041a6454ae.jpg",
  },
  {
    id: 5,
    description: "Minimalist beige set with neutral trainers.",
    image: "https://i.pinimg.com/564x/cc/8e/9a/cc8e9a9b3dc65815baf2f019b70f09c4.jpg",
  },
  {
    id: 6,
    description: "Loose plaid shirt with wide-leg tailored pants.",
    image: "https://i.pinimg.com/564x/bf/91/cf/bf91cf015a8ebbd79b3a7bafc89c7d64.jpg",
  },
  {
    id: 7,
    description: "Boxy cropped jacket over t-shirt and black jeans.",
    image: "https://i.pinimg.com/564x/87/4b/b6/874bb6f69eec62c020f16182f416c309.jpg",
  },
  {
    id: 8,
    description: "Relaxed cardigan with pleated trousers and loafers.",
    image: "https://i.pinimg.com/564x/58/b1/0e/58b10ed4ac3a7df1bbab77d8e7f33cd3.jpg",
  },
  {
    id: 9,
    description: "Layered shirt under vest with loose pants.",
    image: "https://i.pinimg.com/564x/3f/23/48/3f2348c4f938f8332cb1989bc31955b5.jpg",
  },
  {
    id: 10,
    description: "Structured blazer over ribbed knit and slim pants.",
    image: "https://i.pinimg.com/564x/42/61/14/426114185d47385047fc1632b1d03799.jpg",
  },
];

const AndrogynousStyleMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">⚡ Androgynous Style (Masculine Fit)</h1>
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

export default AndrogynousStyleMale;
