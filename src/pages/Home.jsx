// src/pages/Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel-custom.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselImages = [
  {
    src: "/images homepage/4.webp",
    legend: "Radiate Confidence 💖"
  },
  {
    src: "/images homepage/3.jpg",
    legend: "Love Your Skin ✨"
  },
  {
    src: "/images homepage/5.jpg",
    legend: "Define Your Style 🔥"
  }
];

const categories = [
  {
    title: "Skincare Tips",
    description: "Dermatologist‑approved routines for radiant, clear skin.",
    image: "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400",
    link: "/skincare",
  },
  {
    title: "Outfit Ideas",
    description: "Event‑based styling tips tailored to your body type.",
    image: "/images homepage/2.jpg",
    link: "/style",
  },
  {
    title: "Hairstyle Picks",
    description: "Trendy hairstyles that match your vibe & face shape.",
    image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400",
    link: "/hairstyle",
  }
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12 bg-[#fffdfc] dark:bg-[#1a1a1a] min-h-screen"
    >
      {/* Hero Section */}
      <section className="px-4 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to <span className="text-[#FF4081]">YOU</span> ✨
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Your personal glow-up companion — skincare, style, hair, and more — all in one place.
        </p>
      </section>

      {/* Carousel */}
      <section className="mx-auto mb-8 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
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
          {carouselImages.map(({ src, legend }, idx) => (
            <div key={idx} className="relative w-full aspect-[16/6] md:aspect-[16/6] lg:aspect-[16/6]">
              <img
                src={src}
                alt={legend}
                className="rounded-lg object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-4">
                <span className="bg-black/70 text-white px-4 py-2 rounded text-base md:text-lg max-w-[90vw] truncate shadow-lg">
                  {legend}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Clickable Cards */}
      <section className="max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {categories.map((cat, idx) => (
          <Link key={idx} to={cat.link}>
            <motion.div
              className="bg-white dark:bg-[#2a2a2a] rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-[#1a1a1a] dark:text-white">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center px-4">
        <Link
          to="/personal-expert"
          className="inline-block px-8 py-3 bg-[#FF4081] text-white rounded-full font-semibold hover:bg-[#ff5b9f] transition shadow"
        >
          Get Your Personalized Plan 💌
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;
