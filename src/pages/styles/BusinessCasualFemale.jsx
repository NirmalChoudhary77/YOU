// src/pages/styles/BusinessCasualFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Blazer with tucked-in blouse and tapered trousers.",
    image: "https://i.pinimg.com/564x/c6/98/4e/c6984e5461cb7bfb75579ea2a3f8eae1.jpg",
  },
  {
    id: 2,
    description: "High-waisted pencil skirt with button-up shirt.",
    image: "https://i.pinimg.com/564x/0d/29/3d/0d293d0c9fa0f536799cae15294bc0b6.jpg",
  },
  {
    id: 3,
    description: "White blouse with beige chinos and nude heels.",
    image: "https://i.pinimg.com/564x/9e/46/e2/9e46e22951e1a65ae91d29012f4f4e1e.jpg",
  },
  {
    id: 4,
    description: "Tailored jumpsuit with structured handbag.",
    image: "https://i.pinimg.com/564x/29/d1/2f/29d12fbcdb5dcadf3f167fb739702d18.jpg",
  },
  {
    id: 5,
    description: "Blazer dress with ankle boots and subtle jewelry.",
    image: "https://i.pinimg.com/564x/3c/1e/99/3c1e99e33a39408d8f3c1a268cb1828e.jpg",
  },
  {
    id: 6,
    description: "Sleeveless blouse with flared trousers and belt.",
    image: "https://i.pinimg.com/564x/7e/df/c1/7edfc12043b31e3d52b02c504d55de0e.jpg",
  },
  {
    id: 7,
    description: "Knitted top with midi skirt and pumps.",
    image: "https://i.pinimg.com/564x/44/91/44/449144308b69c5dc60fbd6b74ae0c03f.jpg",
  },
  {
    id: 8,
    description: "Structured long coat over a white blouse and trousers.",
    image: "https://i.pinimg.com/564x/77/56/00/77560029c4f501a36c96df8e226d5c7f.jpg",
  },
  {
    id: 9,
    description: "Neutral-toned cardigan over business skirt and blouse.",
    image: "https://i.pinimg.com/564x/f2/98/d2/f298d2a69a1ab7f11298e8fcf8cda1b6.jpg",
  },
  {
    id: 10,
    description: "Button-up shirt tucked into high-waisted wide-leg pants.",
    image: "https://i.pinimg.com/564x/7b/0b/4f/7b0b4f2b7bd9980055c5e75a1889fc20.jpg",
  },
];

const BusinessCasualFemale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">💼 Business Casual (Female)</h1>
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

export default BusinessCasualFemale;
