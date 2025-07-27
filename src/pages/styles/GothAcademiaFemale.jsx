// src/pages/styles/GothAcademiaFemale.jsx
import React from "react";

const femaleOutfits = [
  {
    id: 1,
    description: "Black lace blouse with pleated skirt and oxford shoes.",
    image: "https://i.pinimg.com/736x/0b/63/e4/0b63e4d3a32e994d0545d63d5a6e2b7a.jpg"
  },
  {
    id: 2,
    description: "Dark blazer with high socks and platform boots.",
    image: "https://i.pinimg.com/736x/b6/9e/7d/b69e7db070a295308457ac716f3c3c32.jpg"
  },
  {
    id: 3,
    description: "Corset top with black long skirt and gloves.",
    image: "https://i.pinimg.com/736x/bc/1f/f5/bc1ff53bd54d4ff1dbf174a24d2e84ec.jpg"
  },
  {
    id: 4,
    description: "Oversized cardigan, belt, and flowy skirt.",
    image: "https://i.pinimg.com/736x/2d/68/8e/2d688e946a661e1ee0a930a1f3c6efb5.jpg"
  },
  {
    id: 5,
    description: "Button-up shirt with bowtie and flared pants.",
    image: "https://i.pinimg.com/736x/43/58/2a/43582a2d57cc296f4c51ddbe635a2f43.jpg"
  },
  {
    id: 6,
    description: "Plaid skirt with high-neck sweater and satchel.",
    image: "https://i.pinimg.com/736x/89/18/64/89186452a4c2c4fa0eac9c1c2524f154.jpg"
  },
  {
    id: 7,
    description: "Black turtleneck under structured vest and midi skirt.",
    image: "https://i.pinimg.com/736x/16/e6/3e/16e63e3244a4c44ef2075369b19d93e3.jpg"
  },
  {
    id: 8,
    description: "Double-breasted coat with gloves and umbrella.",
    image: "https://i.pinimg.com/736x/6d/02/bb/6d02bb3a2f82321584c8a19a497db239.jpg"
  },
  {
    id: 9,
    description: "Dark academia dress with vintage brooch.",
    image: "https://i.pinimg.com/736x/d7/63/5b/d7635bdf48d6eaf9d2b3d9ab91ffb70d.jpg"
  },
  {
    id: 10,
    description: "Beret with black coat and stockings.",
    image: "https://i.pinimg.com/736x/92/54/5d/92545dcfc7a5b6d16d3a53c205fe9e35.jpg"
  }
];

const GothAcademiaFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🖤 Goth/Dark Academia for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {femaleOutfits.map((outfit) => (
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

export default GothAcademiaFemale;
