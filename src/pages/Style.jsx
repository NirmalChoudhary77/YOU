import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel-custom.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const styleTypes = [
  {
    title: "Minimalist",
    description: "Simple, clean, and timeless outfits with neutral tones and essential accessories.",
    image: "/images styles/minimalistic/1.jpg",
  },
  {
    title: "Streetwear",
    description: "Bold prints, oversized silhouettes, sneakers, and sporty vibes — urban fashion at its best.",
    image: "https://images.pexels.com/photos/9749115/pexels-photo-9749115.jpeg",
  },
  {
    title: "Chic",
    description: "Elegant pieces with structured tailoring, often with black and white combinations.",
    image: "https://images.pexels.com/photos/4060447/pexels-photo-4060447.jpeg",
  },
  {
    title: "Bohemian",
    description: "Flowy, earthy, and artsy — perfect for a carefree and creative expression.",
    image: "https://images.pexels.com/photos/3622611/pexels-photo-3622611.jpeg",
  },
  {
    title: "Casual",
    description: "Relaxed, comfortable, and practical everyday wear for any occasion.",
    image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
  },
  {
    title: "Vintage/Retro",
    description: "Inspired by past decades, featuring unique patterns, silhouettes, and accessories.",
    image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg",
  },
  {
    title: "Classy/Elegant",
    description: "Polished, sophisticated looks with refined fabrics and timeless pieces.",
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
  {
    title: "Grunge",
    description: "Edgy, layered, and often distressed — think flannel, band tees, and combat boots.",
    image: "https://images.pexels.com/photos/1707826/pexels-photo-1707826.jpeg",
  },
  {
    title: "Y2K",
    description: "Playful, bold, and nostalgic styles from the late 90s and early 2000s.",
    image: "https://images.pexels.com/photos/1130621/pexels-photo-1130621.jpeg",
  },
  {
    title: "Athleisure",
    description: "Sporty, functional, and stylish — activewear that works beyond the gym.",
    image: "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg",
  },
  {
    title: "Preppy",
    description: "Clean, collegiate-inspired looks with polos, sweaters, and pleated skirts.",
    image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
  },
  {
    title: "Cottagecore",
    description: "Romantic, nature-inspired fashion with florals, lace, and soft fabrics.",
    image: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg",
  },
  {
    title: "Goth/Dark Academia",
    description: "Moody, intellectual, and dramatic — dark colors, layers, and vintage touches.",
    image: "https://images.pexels.com/photos/1707827/pexels-photo-1707827.jpeg",
  },
  {
    title: "Korean/K-Fashion",
    description: "Trendy, innovative, and playful styles inspired by Korean pop culture.",
    image: "https://images.pexels.com/photos/1707829/pexels-photo-1707829.jpeg",
  },
  {
    title: "Tomboy",
    description: "Relaxed, boyish looks with a mix of street and casual elements.",
    image: "https://images.pexels.com/photos/532221/pexels-photo-532221.jpeg",
  },
  {
    title: "Androgynous",
    description: "Gender-neutral fashion blending masculine and feminine elements.",
    image: "https://images.pexels.com/photos/1707830/pexels-photo-1707830.jpeg",
  },
  {
    title: "Business Casual",
    description: "Polished, professional looks that balance comfort and style.",
    image: "https://images.pexels.com/photos/406151/pexels-photo-406151.jpeg",
  },
  {
    title: "Formal / Evening Wear",
    description: "Elegant, sophisticated outfits for special occasions and events.",
    image: "https://images.pexels.com/photos/1707840/pexels-photo-1707840.jpeg",
  },
  {
    title: "Loungewear / Cozycore",
    description: "Ultra-comfortable, soft, and relaxed pieces for home and leisure.",
    image: "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg",
  },
  {
    title: "Traditional Indian Wear",
    description: "Vibrant, classic Indian attire including sarees, kurtas, and lehengas.",
    image: "https://images.pexels.com/photos/2531235/pexels-photo-2531235.jpeg",
  },
];

// Converts title to slug for route
const getStyleLink = (title) => `/style/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const Style = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="pt-24 px-4 pb-10 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
    >
      {/* Carousel */}
      <section className="mx-auto mb-8 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label}
                className="carousel-arrow left-2 md:left-4">
                &#8592;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label}
                className="carousel-arrow right-2 md:right-4">
                &#8594;
              </button>
            )
          }
        >
          {[
            "/images styles/1.webp",
            "/images styles/8.webp",
            "/images styles/7.webp",
          ].map((url, idx) => (
            <div key={idx} className="relative w-full aspect-[16/6] md:aspect-[16/6] lg:aspect-[16/6]">
              <img
                src={url}
                
                className="rounded-xl object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-4">
                <span className="bg-black/70 text-white px-4 py-2 rounded text-base md:text-lg max-w-[90vw] truncate shadow-lg">
                  {`Style ${idx + 1}`}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Style That Defines <span className="text-pink-500">YOU</span></h2>
        <p className="text-gray-600 dark:text-gray-300">
          Discover your aesthetic. From street to chic, we help you find your personal vibe — your way.
        </p>
      </div>

      {/* Style Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {styleTypes.map((style, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white dark:bg-[#1E1E1E] rounded-xl p-4 shadow hover:shadow-xl transition"
          >
            <Link to={getStyleLink(style.title)}>
              <img src={style.image} alt={style.title} className="rounded-lg h-48 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{style.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{style.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <Link to="/skincare" className="bg-[#FFDDEE] p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <h3 className="text-lg font-semibold mb-2">Skincare</h3>
          <p className="text-sm">Glow with healthy, radiant skin.</p>
        </Link>
        <Link to="/hairstyle" className="bg-[#E0EFFF] p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <h3 className="text-lg font-semibold mb-2">Hairstyle</h3>
          <p className="text-sm">Find your perfect hair match.</p>
        </Link>
        <Link to="/planner" className="bg-[#DFFFE0] p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <h3 className="text-lg font-semibold mb-2">Glow-Up Planner</h3>
          <p className="text-sm">Organize your transformation.</p>
        </Link>
        <Link to="/personal-expert" className="bg-[#FFF3BF] p-6 rounded-xl shadow hover:scale-105 transition text-center">
          <h3 className="text-lg font-semibold mb-2">Personal Expert</h3>
          <p className="text-sm">Get tailored fashion advice.</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Style;
