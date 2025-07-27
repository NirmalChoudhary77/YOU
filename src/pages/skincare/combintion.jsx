import React from "react";
import { motion } from "framer-motion";

export default function CombinationSkin() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#f5f0ff] to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-purple-700">🔄 Combination Skin</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Combination skin is a mix of oily areas (usually the T-zone) and dry or normal areas. The key is balancing hydration and oil control in your routine.
        </p>
      </motion.div>

      {/* Routine for Combination Skin */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Routine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { step: "Cleanser", desc: "Use a gentle foaming cleanser to manage both dryness and oil." },
            { step: "Toner", desc: "Balancing toner with ingredients like rose water or witch hazel works well." },
            { step: "Serum", desc: "Use niacinamide or hyaluronic acid depending on your area needs." },
            { step: "Moisturizer", desc: "Choose a lightweight, non-greasy moisturizer." },
            { step: "Sunscreen", desc: "Gel-based sunscreen that doesn't clog pores or dry skin." },
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
            { name: "Niacinamide", effect: "Balances oil and soothes skin" },
            { name: "Hyaluronic Acid", effect: "Hydrates dry zones without greasiness" },
            { name: "Witch Hazel", effect: "Tones and calms oily areas" },
            { name: "Green Tea Extract", effect: "Antioxidant + anti-inflammatory" },
          ].map((ing, i) => (
            <div
              key={i}
              className="bg-[#f9f6ff] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-purple-800">{ing.name}</h4>
              <p className="text-sm text-gray-600">{ing.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lifestyle Tips</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Use blotting paper for oily areas during the day.</li>
          <li>Don’t over-exfoliate — 2x a week is enough.</li>
          <li>Apply different products to different areas if needed (multi-zoning).</li>
          <li>Keep your routine simple and balanced.</li>
        </ul>
      </section>
    </div>
  );
}
