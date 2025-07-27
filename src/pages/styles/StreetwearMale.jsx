// src/pages/styles/StreetwearMale.jsx
import React from "react";
import { motion } from "framer-motion";

const outfits = [
{
title: "Graphic Tee + Distressed Jeans + High-top Sneakers",
img: "https://images.pexels.com/photos/17824680/pexels-photo-17824680.jpeg",
},
{
title: "Oversized Hoodie + Cargo Pants + Chunky Sneakers",
img: "https://images.pexels.com/photos/13113490/pexels-photo-13113490.jpeg",
},
{
title: "Bomber Jacket + Black Ripped Jeans + Combat Boots",
img: "https://images.pexels.com/photos/15872978/pexels-photo-15872978.jpeg",
},
{
title: "Denim Jacket + Track Pants + Retro Sneakers",
img: "https://images.pexels.com/photos/13205812/pexels-photo-13205812.jpeg",
},
{
title: "Layered Flannel + Baggy Jeans + Vans",
img: "https://images.pexels.com/photos/4947299/pexels-photo-4947299.jpeg",
},
{
title: "Utility Vest + Sweatpants + Jordans",
img: "https://images.pexels.com/photos/5480788/pexels-photo-5480788.jpeg",
},
{
title: "Puffer Jacket + Techwear Joggers + Nike Air Max",
img: "https://images.pexels.com/photos/18987967/pexels-photo-18987967/free-photo-of-man-in-puffer-jacket.jpeg",
},
{
title: "Baseball Jersey + Cargo Shorts + Slide-ons",
img: "https://images.pexels.com/photos/8613084/pexels-photo-8613084.jpeg",
},
{
title: "Sweatshirt + Denim Shorts + Converse",
img: "https://images.pexels.com/photos/18523853/pexels-photo-18523853/free-photo-of-man-in-casual-streetwear.jpeg",
},
{
title: "Windbreaker + Skate Pants + Skater Shoes",
img: "https://images.pexels.com/photos/9496707/pexels-photo-9496707.jpeg",
},
];

const StreetwearMale = () => {
return (
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -30 }}
transition={{ duration: 0.6 }}
className="pt-24 px-6 pb-10 max-w-6xl mx-auto"
>
<h1 className="text-3xl font-bold mb-8 text-center text-gray-800">👟 Streetwear Outfit Ideas for Men</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{outfits.map((look, index) => (
<div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition">
<img src={look.img} alt={look.title} className="w-full h-64 object-cover" />
<div className="p-4">
<h2 className="text-md font-semibold text-gray-700">{look.title}</h2>
</div>
</div>
))}
</div>
</motion.div>
);
};

export default StreetwearMale;

