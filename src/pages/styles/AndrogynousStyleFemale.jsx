// src/pages/styles/AndrogynousStyleFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Blazer over a tucked shirt with tailored trousers and oxfords.",
    image: "https://i.pinimg.com/564x/b4/d7/b5/b4d7b5d0d2237e6e4c8851f32f627008.jpg",
  },
  {
    id: 2,
    description: "Turtleneck under oversized blazer with cropped pants.",
    image: "https://i.pinimg.com/564x/f4/e5/f2/f4e5f20cce92d3e2919a515b143612b5.jpg",
  },
  {
    id: 3,
    description: "White button-up, high-waisted trousers and loafers.",
    image: "https://i.pinimg.com/564x/9c/85/f7/9c85f765ee73e5ab1a69e009234e69d7.jpg",
  },
  {
    id: 4,
    description: "Black vest over plain tee, wide-leg pants, and boots.",
    image: "https://i.pinimg.com/564x/5c/f0/f9/5cf0f94c10c7d5ae1f3b3c2691bc6f45.jpg",
  },
  {
    id: 5,
    description: "Structured coat with minimalist black and white layers.",
    image: "https://i.pinimg.com/564x/7f/2b/ea/7f2bea773a6247ce8e6891e4266303de.jpg",
  },
  {
    id: 6,
    description: "Oversized shirt half-tucked into straight jeans and sneakers.",
    image: "https://i.pinimg.com/564x/7a/eb/12/7aeb125e27621ddf1120b0d4a92e1264.jpg",
  },
  {
    id: 7,
    description: "Black tee, checkered trousers and derby shoes.",
    image: "https://i.pinimg.com/564x/91/39/e6/9139e6f885c7f6f6bc420171a49e3a53.jpg",
  },
  {
    id: 8,
    description: "White shirt, suspenders, and loose-leg pants.",
    image: "https://i.pinimg.com/564x/f6/d4/36/f6d43642e6c87822bbf25f59f3abfc8a.jpg",
  },
  {
    id: 9,
    description: "Cropped neutral sweatshirt, cargo pants and boots.",
    image: "https://i.pinimg.com/564x/4a/57/f5/4a57f5b25cfc3f4edc064964f2697b01.jpg",
  },
  {
    id: 10,
    description: "Loose vest and shirt combo with slacks and a newsboy cap.",
    image: "https://i.pinimg.com/564x/fd/fb/f8/fdfbf8655c5b3629f5b3efc20a565aec.jpg",
  },
];

const AndrogynousStyleFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">⚧️ Androgynous Style (Feminine Leaning)</h1>
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

export default AndrogynousStyleFemale;
