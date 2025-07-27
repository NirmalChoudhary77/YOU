import React from "react";
import { motion } from "framer-motion";

export default function NormalSkin() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#f0fff7] to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-green-700">😌 Normal Skin</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Normal skin is well-balanced, not too oily or dry. Maintaining a consistent routine helps preserve this natural balance and prevent future issues.
        </p>
      </motion.div>

      {/* Routine for Normal Skin */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Routine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { step: "Cleanser", desc: "Use a gentle, hydrating cleanser to maintain balance." },
            { step: "Toner", desc: "Mild toner to refresh and refine pores." },
            { step: "Serum", desc: "Antioxidant serum to support skin health." },
            { step: "Moisturizer", desc: "Light, daily moisturizer to keep skin supple." },
            { step: "Sunscreen", desc: "Broad-spectrum SPF 30+ to protect from UV damage." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border"
            >
              <h3 className="text-xl font-bold mb-1">{item.step}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ingredient Suggestions */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Best Ingredients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[
            { name: "Vitamin C", effect: "Brightens and protects" },
            { name: "Aloe Vera", effect: "Soothes and hydrates" },
            { name: "Hyaluronic Acid", effect: "Keeps skin plump and hydrated" },
            { name: "Green Tea", effect: "Protects against environmental damage" },
          ].map((ing, i) => (
            <div
              key={i}
              className="bg-[#f2fff7] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-green-800">{ing.name}</h4>
              <p className="text-sm text-gray-600">{ing.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lifestyle Tips</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Stick to a consistent skincare routine.</li>
          <li>Stay hydrated and eat a balanced diet.</li>
          <li>Use sunscreen every day to prevent long-term damage.</li>
          <li>Don’t skip moisturizer—even if your skin feels fine.</li>
        </ul>
      </section>
    </div>
  );
}
