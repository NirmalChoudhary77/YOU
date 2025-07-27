// src/pages/styles/AthleisureFemale.jsx
import React from "react";

const athleisureFemaleOutfits = [
  {
    id: 1,
    description: "Pastel crop top and high-waist leggings with a sporty bomber jacket.",
    image: "https://i.pinimg.com/736x/1e/4d/91/1e4d914afc55e617f4ee9dd6189d9cf0.jpg"
  },
  {
    id: 2,
    description: "Oversized hoodie with biker shorts and white sneakers.",
    image: "https://i.pinimg.com/736x/7b/36/99/7b36990b802c8b9cd894a75b1a0d3177.jpg"
  },
  {
    id: 3,
    description: "Mesh-paneled tank top and joggers with a baseball cap.",
    image: "https://i.pinimg.com/736x/c2/ce/cb/c2cecbf5fdb1d0d621ac404e9b2b3f46.jpg"
  },
  {
    id: 4,
    description: "Beige co-ord with longline jacket and crossbody pouch.",
    image: "https://i.pinimg.com/736x/20/42/66/204266b3944cbf4782ff8c0e78017ae2.jpg"
  },
  {
    id: 5,
    description: "Vibrant sports bra and leggings with a sleek top knot bun.",
    image: "https://i.pinimg.com/736x/82/9b/88/829b884ccad5a16d0e0ffb66eae514cc.jpg"
  },
  {
    id: 6,
    description: "Tech fleece full-zip hoodie with leggings and tube socks.",
    image: "https://i.pinimg.com/736x/14/e9/48/14e9489ea7b60c6403e906418bdc305f.jpg"
  },
  {
    id: 7,
    description: "White cropped tee, joggers, and a plaid shirt tied at the waist.",
    image: "https://i.pinimg.com/736x/c2/48/6f/c2486f89a2b0f397dbf4aeb4fa724e9b.jpg"
  },
  {
    id: 8,
    description: "Stylish black gym romper with chunky sneakers and a duffle.",
    image: "https://i.pinimg.com/736x/ed/c7/ae/edc7aeb37cf8031b79a8c35e1161e54a.jpg"
  },
  {
    id: 9,
    description: "Athletic unitard under oversized denim jacket with shades.",
    image: "https://i.pinimg.com/736x/bf/dc/3e/bfdc3e38ea1c97d65bbdbd13f1f7f984.jpg"
  },
  {
    id: 10,
    description: "Full Nike set with cropped jacket and branded cap.",
    image: "https://i.pinimg.com/736x/3c/25/3b/3c253ba47f9b086ce9b76546a0db2fe4.jpg"
  }
];

const AthleisureFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🏋️ Athleisure Style for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {athleisureFemaleOutfits.map((outfit) => (
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

export default AthleisureFemale;
