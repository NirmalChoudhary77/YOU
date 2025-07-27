// src/pages/styles/FormalWearFemale.jsx
import React from "react";

const outfits = [
  {
    id: 1,
    description: "Classic black gown with a thigh-high slit.",
    image: "https://i.pinimg.com/564x/4e/e2/f0/4ee2f0d6b503f7b18cf28ed8fda7be5b.jpg",
  },
  {
    id: 2,
    description: "Satin slip dress with a draped neckline.",
    image: "https://i.pinimg.com/564x/6e/17/9b/6e179b3e68f31633f8f8d5f1d59e6d8e.jpg",
  },
  {
    id: 3,
    description: "Off-shoulder red mermaid dress with statement earrings.",
    image: "https://i.pinimg.com/564x/b3/54/ef/b354ef87807f84b6c6c69cf8bc83e0fc.jpg",
  },
  {
    id: 4,
    description: "Velvet deep blue gown with long sleeves.",
    image: "https://i.pinimg.com/564x/88/bd/20/88bd20c05b5b21b294f7aa9c05cbbf4b.jpg",
  },
  {
    id: 5,
    description: "Sequin bodycon dress with heels and clutch.",
    image: "https://i.pinimg.com/564x/ae/c1/d5/aec1d53fc5b71c07f0e4138c3e098ca5.jpg",
  },
  {
    id: 6,
    description: "Structured blazer dress with minimal jewelry.",
    image: "https://i.pinimg.com/564x/95/12/25/951225d1f9e14a2eb8becccb8c6896fc.jpg",
  },
  {
    id: 7,
    description: "High-neck silver gown with open back.",
    image: "https://i.pinimg.com/564x/fb/dc/5f/fbdc5f0021321552219ed83503d3c6b1.jpg",
  },
  {
    id: 8,
    description: "Metallic gold halter-neck dress with heels.",
    image: "https://i.pinimg.com/564x/9d/9f/e2/9d9fe23ad79ce69f1ffbe9e84c456e4d.jpg",
  },
  {
    id: 9,
    description: "Lace midi dress in wine red shade.",
    image: "https://i.pinimg.com/564x/68/93/0a/68930a9a3c1574d280e4ff72d1df0972.jpg",
  },
  {
    id: 10,
    description: "One-shoulder asymmetric black dress with stilettos.",
    image: "https://i.pinimg.com/564x/9e/f7/48/9ef748fca9c0086e32712b02dfc60944.jpg",
  },
];

const FormalWearFemale = () => (
  <div className="pt-24 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">💃 Formal / Evening Wear (Female)</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {outfits.map(({ id, description, image }) => (
        <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={image} alt="formal wear" className="w-full h-80 object-cover" />
          <div className="p-4">
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FormalWearFemale;
