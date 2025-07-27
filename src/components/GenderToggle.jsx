// src/components/GenderToggle.jsx
import React from "react";

const GenderToggle = ({ gender, setGender }) => {
  const toggle = () => setGender(gender === "female" ? "male" : "female");

  return (
    <div className="flex justify-center items-center my-6">
      <button
        onClick={toggle}
        className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-600 transition"
      >
        Switch to {gender === "female" ? "Male" : "Female"} Styles
      </button>
    </div>
  );
};

export default GenderToggle;
