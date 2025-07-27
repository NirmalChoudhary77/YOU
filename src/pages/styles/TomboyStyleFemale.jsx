// src/pages/styles/TomboyStyleFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Oversized denim jacket with loose black cargo pants and sneakers.",
    image: "https://i.pinimg.com/564x/58/b4/8e/58b48eac1ad69e325db35cacc7dfb12e.jpg",
  },
  {
    id: 2,
    description: "Graphic tee layered under a plaid shirt with boyfriend jeans.",
    image: "https://i.pinimg.com/564x/17/ae/20/17ae202d2f51f618ad20b51fecc0e92f.jpg",
  },
  {
    id: 3,
    description: "Plain hoodie, track pants, and classic Converse.",
    image: "https://i.pinimg.com/564x/b2/2d/50/b22d5055ffcf3cbcc28e11141fe8ef26.jpg",
  },
  {
    id: 4,
    description: "Loose white shirt tucked into distressed denim shorts with sneakers.",
    image: "https://i.pinimg.com/564x/aa/c6/38/aac6387aa5c56db28e5a89d3ec56cc80.jpg",
  },
  {
    id: 5,
    description: "Baseball cap, layered sweatshirt, and track pants.",
    image: "https://i.pinimg.com/564x/4e/54/31/4e543106a0be2d973190b509a13a99d0.jpg",
  },
  {
    id: 6,
    description: "Longline flannel with cargo shorts and mid-calf socks.",
    image: "https://i.pinimg.com/564x/c3/d0/ea/c3d0eaeb0638e4499aa365bcf8b9cf9a.jpg",
  },
  {
    id: 7,
    description: "Tank top under open short-sleeve shirt and joggers.",
    image: "https://i.pinimg.com/564x/f0/2f/df/f02fdf515c7b1760efb946e3dd59dcd2.jpg",
  },
  {
    id: 8,
    description: "Oversized sweatshirt over biker shorts and sneakers.",
    image: "https://i.pinimg.com/564x/ff/d9/f5/ffd9f57451da7f74d1b270eb3201cc32.jpg",
  },
  {
    id: 9,
    description: "Denim overalls over a graphic tee and Vans shoes.",
    image: "https://i.pinimg.com/564x/e2/47/e2/e247e22e2f9b0c7e519b91a5c82d4532.jpg",
  },
  {
    id: 10,
    description: "Baggy sweatshirt with wide-leg jeans and bucket hat.",
    image: "https://i.pinimg.com/564x/f0/fb/6c/f0fb6c45b28f3b80d90d2e6c6593787d.jpg",
  },
];

const TomboyStyleFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🖤 Tomboy Style for Girls</h1>
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

export default TomboyStyleFemale;
