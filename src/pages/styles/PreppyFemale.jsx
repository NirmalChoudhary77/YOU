// src/pages/styles/PreppyFemale.jsx
import React from "react";

const preppyFemaleOutfits = [
  {
    id: 1,
    description: "Plaid skirt with white blouse and ballet flats.",
    image: "https://i.pinimg.com/736x/7c/ce/f4/7ccef4db8016488104502d3dc50750b4.jpg"
  },
  {
    id: 2,
    description: "Cable-knit sweater with tennis skirt and loafers.",
    image: "https://i.pinimg.com/736x/54/32/f1/5432f161ab8f62c14c6f7dc8b6b5f3ff.jpg"
  },
  {
    id: 3,
    description: "Blazer over a pleated dress with Mary Janes.",
    image: "https://i.pinimg.com/736x/d2/e5/96/d2e5967d055a12735e69e943a650af48.jpg"
  },
  {
    id: 4,
    description: "Button-down shirt tucked into pastel trousers.",
    image: "https://i.pinimg.com/736x/63/e2/e9/63e2e97f8a0c9397819ff4dd519d16fc.jpg"
  },
  {
    id: 5,
    description: "Argyle sweater vest and white tennis skirt combo.",
    image: "https://i.pinimg.com/736x/88/f5/c3/88f5c3d723aefcfb8f30bafe70b3e9d1.jpg"
  },
  {
    id: 6,
    description: "Tweed jacket with A-line skirt and opaque tights.",
    image: "https://i.pinimg.com/736x/b0/bf/9d/b0bf9dd9f838598e96f07a7d2037027f.jpg"
  },
  {
    id: 7,
    description: "White blouse layered under a sweater vest and mini skirt.",
    image: "https://i.pinimg.com/736x/11/38/2d/11382db6b8cfed319b4c2eaf2eb929cf.jpg"
  },
  {
    id: 8,
    description: "Cardigan with Peter Pan collar blouse and jeans.",
    image: "https://i.pinimg.com/736x/7e/aa/92/7eaa9221e62b530fa5b3a31aafc5eebc.jpg"
  },
  {
    id: 9,
    description: "Striped tee, pleated skirt, and platform oxfords.",
    image: "https://i.pinimg.com/736x/bf/b7/33/bfb733bcac0382e61412296ef2f2f530.jpg"
  },
  {
    id: 10,
    description: "Polka-dot blouse, plaid trousers, and beret.",
    image: "https://i.pinimg.com/736x/98/4e/16/984e1611eabb81d0100e679a2327f7a5.jpg"
  }
];

const PreppyFemale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">📚 Preppy Style for Women</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {preppyFemaleOutfits.map((outfit) => (
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

export default PreppyFemale;
