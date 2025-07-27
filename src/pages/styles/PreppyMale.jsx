// src/pages/styles/PreppyMale.jsx
import React from "react";

const preppyMaleOutfits = [
  {
    id: 1,
    description: "Navy blazer, white button-down, chinos, and brown loafers.",
    image: "https://i.pinimg.com/736x/22/ae/9e/22ae9e4e41d8c48b319d82be6f9ebdcb.jpg"
  },
  {
    id: 2,
    description: "Polo shirt with khaki shorts and boat shoes.",
    image: "https://i.pinimg.com/736x/21/90/84/21908408c7f1fdc5dbeb80472ac799c7.jpg"
  },
  {
    id: 3,
    description: "Sweater draped over shoulders with pastel Oxford shirt.",
    image: "https://i.pinimg.com/736x/8b/c2/1f/8bc21fa8f1f94f0b7ed30374782c99cd.jpg"
  },
  {
    id: 4,
    description: "Argyle sweater vest with pressed slacks and leather shoes.",
    image: "https://i.pinimg.com/736x/6b/3a/4c/6b3a4ce64fbb2cb23054c99eb1f0c44f.jpg"
  },
  {
    id: 5,
    description: "Double-breasted blazer with pleated trousers and tie.",
    image: "https://i.pinimg.com/736x/84/33/e0/8433e0cb91d3981cb90c96c104444b2a.jpg"
  },
  {
    id: 6,
    description: "Cardigan over a collared shirt with straight-leg jeans.",
    image: "https://i.pinimg.com/736x/3e/f3/c4/3ef3c43aa8b184093d570d3e9ecb3e86.jpg"
  },
  {
    id: 7,
    description: "Striped rugby shirt with chinos and loafers.",
    image: "https://i.pinimg.com/736x/6a/f0/1e/6af01ec1e89131f6f01f7094e78fdc89.jpg"
  },
  {
    id: 8,
    description: "Blazer layered over a sweater with dress pants.",
    image: "https://i.pinimg.com/736x/3d/27/e1/3d27e1a3a950cb65e76464d87a5d9182.jpg"
  },
  {
    id: 9,
    description: "Beige trench coat, navy trousers, and penny loafers.",
    image: "https://i.pinimg.com/736x/8e/f4/4d/8ef44dd6f206370768e403f5b4e16c32.jpg"
  },
  {
    id: 10,
    description: "Clean button-up shirt tucked into dark denim with leather belt.",
    image: "https://i.pinimg.com/736x/06/85/7e/06857e112e5d2cb0e76ad3d5c5dc19f1.jpg"
  }
];

const PreppyMale = () => {
  return (
    <div className="pt-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🎓 Preppy Style for Men</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {preppyMaleOutfits.map((outfit) => (
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

export default PreppyMale;
