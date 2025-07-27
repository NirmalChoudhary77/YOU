import React from "react";
import { motion } from "framer-motion";

export default function DrySkin() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#fff6f0] to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-yellow-700">🌵 Dry Skin</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Dry skin often feels tight, flaky, or rough. It's caused by a lack of moisture and requires hydrating and nourishing ingredients to restore balance.
        </p>
      </motion.div>

      {/* Routine for Dry Skin */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Routine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { step: "Cleanser", desc: "Use a hydrating cream or milk-based cleanser." },
            { step: "Toner", desc: "Opt for alcohol-free toners with glycerin or rose water." },
            { step: "Serum", desc: "Include hyaluronic acid or squalane for deep hydration." },
            { step: "Moisturizer", desc: "Use a thick, emollient-rich moisturizer." },
            { step: "Sunscreen", desc: "Choose moisturizing SPF with hydrating base." },
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
            { name: "Hyaluronic Acid", effect: "Attracts & retains moisture" },
            { name: "Squalane", effect: "Nourishes and softens skin" },
            { name: "Ceramides", effect: "Strengthens skin barrier" },
            { name: "Shea Butter", effect: "Deep hydration & comfort" },
          ].map((ing, i) => (
            <div
              key={i}
              className="bg-[#fff9f4] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-yellow-800">{ing.name}</h4>
              <p className="text-sm text-gray-600">{ing.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Lifestyle Tips</h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>Use lukewarm water for cleansing—never hot.</li>
          <li>Apply moisturizer on damp skin to lock in hydration.</li>
          <li>Avoid harsh soaps or alcohol-based products.</li>
          <li>Use a humidifier during dry seasons.</li>
        </ul>
      </section>
    </div>
  );
}
