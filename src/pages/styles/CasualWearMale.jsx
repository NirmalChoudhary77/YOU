import React from 'react';
import { motion } from 'framer-motion';

const outfits = [
  {
    title: "Graphic Tee + Ripped Jeans",
    image: "https://i.pinimg.com/564x/e2/f9/e1/e2f9e10dd9911ac53efaf1a75b429f97.jpg",
  },
  {
    title: "Plain White Tee + Chinos",
    image: "https://i.pinimg.com/564x/f4/48/23/f44823b6fc03739cc5c74763249b5df9.jpg",
  },
  {
    title: "Oversized Hoodie + Joggers",
    image: "https://i.pinimg.com/564x/c4/98/6e/c4986ec1a38a59efcd931fcb216bfac8.jpg",
  },
  {
    title: "Denim Shirt + Black Jeans",
    image: "https://i.pinimg.com/564x/18/03/e1/1803e130db3795098ae4984c0ee0a93f.jpg",
  },
  {
    title: "Henley + Cargo Pants",
    image: "https://i.pinimg.com/564x/54/90/63/549063b0c54c04b72a3aa8dc967a03c8.jpg",
  },
  {
    title: "Bomber Jacket + Slim Fit Jeans",
    image: "https://i.pinimg.com/564x/90/40/c6/9040c6c4e6a3efdc602e3e7f29ea3490.jpg",
  },
  {
    title: "Striped Polo + Khaki Shorts",
    image: "https://i.pinimg.com/564x/f7/d6/67/f7d6670652901cf7e5f80d747210e623.jpg",
  },
  {
    title: "Plaid Shirt + Dark Denim",
    image: "https://i.pinimg.com/564x/ef/2d/65/ef2d656327da34f9c210a0d33e5e47a5.jpg",
  },
  {
    title: "Turtleneck + Trousers",
    image: "https://i.pinimg.com/564x/e0/d7/2e/e0d72e9d5a734fda41c35c164a85e189.jpg",
  },
  {
    title: "Sweatshirt + Cuffed Jeans",
    image: "https://i.pinimg.com/564x/2e/1c/ea/2e1cea9e35fcd10b2fd857f02a6b92b7.jpg",
  },
];

const CasualWearMale = () => (
  <motion.div className="pt-24 px-6 pb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold mb-6 text-center">Casual Wear – Men</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {outfits.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default CasualWearMale;
