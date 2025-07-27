import React from "react";
import { motion } from "framer-motion";

export default function SensitiveSkin() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#fff0f0] to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-red-700">🔥 Sensitive Skin</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Sensitive skin is prone to redness, itching, burning, or dryness. It reacts easily to products or environmental factors and requires extra gentle care.
        </p>
      </motion.div>

      {/* Routine for Sensitive Skin */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Routine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { step: "Cleanser", desc: "Use a fragrance-free, non-foaming cleanser." },
            { step: "Toner", desc: "Alcohol-free, calming toner with chamomile or aloe." },
            { step: "Serum", desc: "Niacinamide or Centella Asiatica to reduce inflammation." },
            { step: "Moisturizer", desc: "Barrier-repairing, hypoallergenic moisturizers only." },
            { step: "Sunscreen", desc: "Mineral (physical) SPF with zinc oxide or titanium dioxide." },
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
            { name: "Aloe Vera", effect: "Soothes redness and calms skin" },
            { name: "Centella Asiatica", effect: "Heals and strengthens skin barrier" },
            { name: "Colloidal Oatmeal", effect: "Reduces itching and irritation" },
            { name: "Zinc Oxide", effect: "Gentle sun protection" },
          ].map((ing, i) => (
            <div
              key={i}
              className="bg-[#fff6f6] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-red-800">{ing.name}</h4>
              <p className="text-sm text-gray-600">{ing.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lifestyle Tips</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Avoid hot water and harsh scrubs.</li>
          <li>Patch test new products before applying to the face.</li>
          <li>Keep your routine minimal and consistent.</li>
          <li>Protect skin from wind, sun, and pollution.</li>
        </ul>
      </section>
    </div>
  );
}
