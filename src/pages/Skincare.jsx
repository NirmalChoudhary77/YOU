import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const skincareSteps = [
  { step: "Cleanser", desc: "Removes dirt & oil to prep your skin.", icon: "🧼" },
  { step: "Toner", desc: "Balances pH & tightens pores.", icon: "💧" },
  { step: "Serum", desc: "Delivers active ingredients deep into skin.", icon: "💎" },
  { step: "Moisturizer", desc: "Hydrates & locks in moisture.", icon: "🧴" },
  { step: "Sunscreen", desc: "Protects against harmful UV rays.", icon: "🌞" },
];

const skinTypes = [
  { type: "Oily", emoji: "☀️", desc: "Shiny, enlarged pores, prone to acne", route: "/skincare/oily" },
  { type: "Dry", emoji: "🌵", desc: "Flaky, tight, rough texture", route: "/skincare/dry" },
  { type: "Combination", emoji: "🔄", desc: "Oily T-zone & dry cheeks", route: "/skincare/combination" },
  { type: "Normal", emoji: "😌", desc: "Balanced, few issues", route: "/skincare/normal" },
  { type: "Sensitive", emoji: "🔥", desc: "Red, itchy, reacts easily", route: "/skincare/sensitive" },
];

const ingredients = [
  { name: "Niacinamide", effect: "Brightens skin, controls oil", emoji: "✨" },
  { name: "Hyaluronic Acid", effect: "Deep hydration", emoji: "💧" },
  { name: "Vitamin C", effect: "Fades dark spots", emoji: "🍊" },
  { name: "Salicylic Acid", effect: "Treats acne", emoji: "🧪" },
  { name: "Aloe Vera", effect: "Soothes skin", emoji: "🌿" },
  { name: "Ceramides", effect: "Restores skin barrier", emoji: "🧬" },
];

export default function Skincare() {
  return (
    <div className="pt-16 md:pt-32 md:p-10 bg-gradient-to-b from-[#fdf6f0] to-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center space-y-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2f2f2f]">Glow Begins with Care</h1>
        <p className="text-lg text-[#555] max-w-2xl mx-auto">Discover personalized routines, powerful ingredients, and expert tips tailored just for your skin type.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/profile" className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 duration-300">Get Your Skin Profile</Link>
          <a href="#routine" className="text-[#111] underline">Explore Routines</a>
        </div>
      </motion.div>

      {/* Skin Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center dark:text-black">Know Your Skin Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skinTypes.map((s, i) => (
            <Link to={s.route} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-black p-6 rounded-2xl shadow-md text-center cursor-pointer">
                <h3 className="text-2xl font-bold">{s.emoji} {s.type}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
                <div className="mt-4 inline-flex items-center text-blue-600 hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Routine Steps */}
      <section id="routine" className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center dark:text-black">Daily Skincare Routine</h2>
        <div className="flex overflow-x-auto gap-6 p-2 md:justify-center">
          {skincareSteps.map((step, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="min-w-[200px] bg-white dark:bg-black p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl">{step.icon}</div>
              <h3 className="font-bold text-xl mt-2">{step.step}</h3>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ingredient Highlights */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center dark:text-black">Star Ingredients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ingredients.map((ing, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-[#fefefe] dark:bg-black p-6 rounded-xl shadow border text-center">
              <div className="text-3xl">{ing.emoji}</div>
              <h4 className="text-xl font-bold mt-2">{ing.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{ing.effect}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#fffaf6] dark:bg-black py-10 rounded-xl max-w-4xl mx-auto shadow-md">
        <h2 className="text-2xl font-bold mb-2">Need a Routine Tailored for You?</h2>
        <p className="text-gray-600 mb-4">Let our personal expert create a skincare plan based on your unique needs.</p>
        <Link to="/personalexpert" className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-300">Get Personalized Advice</Link>
      </section>
    </div>
  );
}
