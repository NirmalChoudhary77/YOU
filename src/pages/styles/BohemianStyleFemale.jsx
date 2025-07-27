// src/pages/styles/BohemianStyleFemale.jsx
import React from 'react';

const bohemianOutfits = [
  {
    title: 'Maxi Skirt + Crochet Top',
    img: 'https://images.unsplash.com/photo-1627662058204-72637b1747be',
  },
  {
    title: 'Kimono + Denim Shorts',
    img: 'https://images.unsplash.com/photo-1589464843892-c6e6614d2385',
  },
  {
    title: 'Peasant Blouse + Flowy Pants',
    img: 'https://images.unsplash.com/photo-1591348272028-9488749465d3',
  },
  {
    title: 'Fringed Vest + Mini Skirt',
    img: 'https://images.unsplash.com/photo-1612578507563-201e870b2b1e',
  },
  {
    title: 'Boho Dress + Sandals',
    img: 'https://images.unsplash.com/photo-1575846171053-8a1a2ee98a4f',
  },
  {
    title: 'Lace Top + High-Waist Shorts',
    img: 'https://images.unsplash.com/photo-1542062703-1dba0f01ed2f',
  },
  {
    title: 'Patterned Maxi Dress',
    img: 'https://images.unsplash.com/photo-1618221693873-11f697dc1ee0',
  },
  {
    title: 'Wide-Leg Pants + Bandeau',
    img: 'https://images.unsplash.com/photo-1603145733145-1398fc264574',
  },
  {
    title: 'Ethnic Print Jumpsuit',
    img: 'https://images.unsplash.com/photo-1581804928342-4e3405e39bcf',
  },
  {
    title: 'Off-shoulder Top + Long Skirt',
    img: 'https://images.unsplash.com/photo-1602810310661-4e899bb94700',
  },
];

const BohemianStyleFemale = () => {
  return (
    <div className="pt-24 px-6 pb-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Bohemian Style for Women</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {bohemianOutfits.map((outfit, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <img src={outfit.img} alt={outfit.title} className="w-full h-64 object-cover rounded-lg mb-3" />
            <h2 className="text-lg font-semibold">{outfit.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BohemianStyleFemale;
