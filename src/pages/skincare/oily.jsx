import React from "react";
import { motion } from "framer-motion";

export default function OilySkin() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#f0f4ff] to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-700">☀️ Oily Skin</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Oily skin is characterized by excess sebum production, shiny appearance,
          enlarged pores, and frequent breakouts. The right skincare can help
          balance oil while keeping your skin healthy.
        </p>
      </motion.div>

      {/* Routine for Oily Skin */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Routine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { step: "Cleanser", desc: "Use a gel-based or foaming cleanser to remove excess oil." },
            { step: "Toner", desc: "Choose alcohol-free toners with ingredients like witch hazel or niacinamide." },
            { step: "Serum", desc: "Look for niacinamide or salicylic acid to reduce oil & acne." },
            { step: "Moisturizer", desc: "Use a lightweight, oil-free, non-comedogenic moisturizer." },
            { step: "Sunscreen", desc: "Matte-finish, broad-spectrum SPF 30+ sunscreen is ideal." },
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
            { name: "Niacinamide", effect: "Controls oil production" },
            { name: "Salicylic Acid", effect: "Clears pores & treats acne" },
            { name: "Clay (Kaolin/Bentonite)", effect: "Absorbs oil" },
            { name: "Zinc", effect: "Reduces inflammation & sebum" },
          ].map((ing, i) => (
            <div
              key={i}
              className="bg-[#f4f9ff] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-blue-800">{ing.name}</h4>
              <p className="text-sm text-gray-600">{ing.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lifestyle Tips</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Clean your face twice daily – no more, no less.</li>
          <li>Use blotting papers during the day to control shine.</li>
          <li>Avoid heavy, greasy makeup or skincare.</li>
          <li>Keep pillowcases and phones clean to prevent acne.</li>
        </ul>
      </section>
    </div>
  );
}
