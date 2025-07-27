import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "./carousel-custom.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const faceShapes = ["Oval", "Round", "Square", "Heart", "Diamond", "Rectangle"];

const shapeImages = {
  Oval: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=400",
  Round: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400",
  Square: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=400",
  Heart: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=400",
  Diamond: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&w=400",
  Rectangle: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400",
};

const carouselImages = [
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=800",
  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=800",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=800",
];

const FaceShapeSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-[#E0EFFF] to-[#f9f4ff] rounded-xl shadow-lg p-8 my-10 text-center max-w-2xl mx-auto"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Your Face Shape</h2>
    <p className="mb-4 text-gray-700 dark:text-gray-300">
      Not sure which hairstyle suits you? Use our Face Shape Detector to get personalized recommendations!
    </p>
    <Link
      to="/face-shape-detector"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
    >
      Detect My Face Shape
    </Link>
  </motion.div>
);

const Hairstyle = () => {
  const [selectedShape, setSelectedShape] = useState(null);

  const handleChange = (shape) => setSelectedShape(shape);

  return (
    <motion.div
      className="pt-24 px-4 pb-16 min-h-screen bg-[#fff5f0] dark:bg-[#1a1a1a] text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <FaceShapeSection />

      {/* 🖼 Carousel */}
      <div className="mx-auto mb-10 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={4000}
          className="rounded-xl shadow-xl"
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
          {carouselImages.map((src, i) => (
            <div key={i} className="relative w-full aspect-[16/6] md:aspect-[16/6] lg:aspect-[16/6] overflow-hidden">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-4">
                <span className="bg-black/70 text-white px-4 py-2 rounded text-base md:text-lg max-w-[90vw] truncate shadow-lg">
                  Be Bold. Be Styled.
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🎯 Face Shape Cards */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Face Shape</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We’ll recommend hairstyles that suit your facial structure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-10">
          {faceShapes.map((shape) => {
            const route =
              shape.toLowerCase() === "rectangle"
                ? "/hairstyles/oblong"
                : `/hairstyles/${shape.toLowerCase()}`;

            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={shape}
                className={`rounded-xl shadow-md overflow-hidden border-2 ${
                  selectedShape === shape ? "border-pink-500" : "border-transparent"
                } transition`}
              >
                <Link to={route} onClick={() => handleChange(shape)}>
                  <img
                    src={shapeImages[shape]}
                    alt={shape}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-lg font-semibold text-center">{shape}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ✅ Recommendations */}
      {selectedShape && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Best Hairstyles for {selectedShape} Face
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#2a2a2a] rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?hairstyle,${selectedShape},${idx}`}
                  alt="hairstyle"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">Style {idx + 1}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    This hairstyle enhances your {selectedShape.toLowerCase()} face by
                    framing your features and balancing proportions.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 🔁 Change Shape */}
          <div className="text-center mt-10">
            <button
              onClick={() => setSelectedShape(null)}
              className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow transition"
            >
              🔁 Change Face Shape
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Hairstyle;
