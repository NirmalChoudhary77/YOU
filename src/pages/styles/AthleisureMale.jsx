// src/pages/styles/AthleisureMale.jsx
import React from "react";

const athleisureMaleOutfits = [
{
id: 1,
description: "Black performance joggers with a fitted white dry-fit tee.",
image: "https://i.pinimg.com/736x/01/b8/5b/01b85be0df2bcae98fdd07fbeed16945.jpg"
},
{
id: 2,
description: "Quarter-zip tech fleece hoodie with matching tapered track pants.",
image: "https://i.pinimg.com/736x/92/ae/45/92ae45ea30eea02fc13cf465d6b4ac38.jpg"
},
{
id: 3,
description: "Compression long sleeve under sleeveless tank and gym shorts.",
image: "https://i.pinimg.com/736x/79/e9/c9/79e9c9cc55a74a1ae9f86c8a3f0cc93a.jpg"
},
{
id: 4,
description: "Running jacket with mesh panels and lightweight shorts.",
image: "https://i.pinimg.com/736x/86/0d/96/860d963f0619cdb9a1d6b65a1bdef86e.jpg"
},
{
id: 5,
description: "White oversized hoodie with gym leggings and low-top sneakers.",
image: "https://i.pinimg.com/736x/31/50/d7/3150d7b64893ae4a938dcb43cc56cb12.jpg"
},
{
id: 6,
description: "Nike tracksuit with a cross-body sports bag.",
image: "https://i.pinimg.com/736x/fd/2f/6c/fd2f6c52c2f1b823f9f8abf5eb6d86b3.jpg"
},
{
id: 7,
description: "Performance tank with compression pants and running shoes.",
image: "https://i.pinimg.com/736x/0e/ff/66/0eff661a149eb8eb1cb1abaf8eaddd1b.jpg"
},
{
id: 8,
description: "Monochrome gym co-ord with oversized tote and bucket hat.",
image: "https://i.pinimg.com/736x/4c/aa/f5/4caaf5c508ac2089dc36a4b0de4bb7a4.jpg"
},
{
id: 9,
description: "Fleece shorts, tank top, and light bomber for post-workout vibes.",
image: "https://i.pinimg.com/736x/e4/65/f9/e465f9e7d17762177c12797dd79f6d18.jpg"
},
{
id: 10,
description: "Sport polo shirt with slim track trousers and trainers.",
image: "https://i.pinimg.com/736x/1b/2e/b3/1b2eb3d6a58df6ff4962c23c56b67a4e.jpg"
}
];

const AthleisureMale = () => {
return (
<div className="pt-24 px-4">
<h1 className="text-4xl font-bold mb-6 text-center">🏋️ Athleisure Style for Men</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
{athleisureMaleOutfits.map((outfit) => (
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

export default AthleisureMale;