// src/pages/styles/CottagecoreMale.jsx
import React from "react";

const maleOutfits = [
  {
    id: 1,
    description: "Loose linen shirt with suspenders and wide trousers.",
    image: "https://i.pinimg.com/736x/1b/f8/33/1bf833da26c6649be7ae7e1d0cf1765a.jpg"
  },
  {
    id: 2,
    description: "Cable-knit sweater, corduroy pants, and leather boots.",
    image: "https://i.pinimg.com/736x/44/b1/e0/44b1e0de7607e46c86a6ee7d611a00b7.jpg"
  },
  {
    id: 3,
    description: "Button-up shirt with vintage vest and rolled chinos.",
    image: "https://i.pinimg.com/736x/f1/4e/33/f14e335444f9e1225ebc218ae2f0ddee.jpg"
  },
  {
    id: 4,
    description: "Floral shirt with earthy trousers and suspenders.",
    image: "https://i.pinimg.com/736x/02/9b/b2/029bb230201578a6e401c8c8997db835.jpg"
  },
  {
    id: 5,
    description: "Knitted cardigan, vintage scarf, and canvas trousers.",
    image: "https://i.pinimg.com/736x/7f/0a/e9/7f0ae929582acc4f515d44f8df066607.jpg"
  },
  {
    id: 6,
    description: "White long-sleeve shirt, brown overalls, and boots.",
    image: "https://i.pinimg.com/736x/fb/ff/84/fbff848b58ecad6de7c31fcbd8c5ad85.jpg"
  },
  {
    id: 7,
    description: "Wool vest, rolled sleeves, and hiking boots.",
    image: "https://i.pinimg.com/736x/f5/b0/7d/f5b07df9933c8d74ff83cc0cbbeaa861.jpg"
  },
  {
    id: 8,
    description: "Long-sleeve henley shirt and suspenders with flat cap.",
    image: "https://i.pinimg.com/736x/1f/f4/56/1ff45621d06ae29e9e30d1aa26d21fe2.jpg"
  },
  {
    id: 9,
    description: "Patchwork jacket and neutral earthy tones.",
    image: "https://i.pinimg.com/736x/35/0a/f1/350af16df3b3b349a8d6c5f772b66f63.jpg"
  },
  {
    id: 10,
    description: "Wool pants, suspenders, and vintage flannel shirt.",
    image: "https://i.pinimg.com/736x/6f/b5/c9/6fb5c9b1435088bc9ffab30a22c9ef99.jpg"
  }
];

const CottagecoreMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🌿 Cottagecore Style for Men</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {maleOutfits.map((outfit) => (
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

export default CottagecoreMale;
