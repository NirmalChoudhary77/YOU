
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoungewearCozycoreMale from './LoungewearCozycoreMale';
import LoungewearCozycoreFemale from './LoungewearCozycoreFemale';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

const genderOptions = [
  {
    label: "Male",
    value: "male",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=400"
  },
  {
    label: "Female",
    value: "female",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400"
  }
];

const LoungewearCozycore = () => {
  const { user } = useAuth();
  const [gender, setGender] = useState(null);

  useEffect(() => {
    const fetchGender = async () => {
      if (!user) return;
      const { data } = await supabase
        .from('submissions')
        .select('gender')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      if (data) setGender(data.gender);
    };
    fetchGender();
  }, [user]);

  return (
    <motion.div className="pt-24 min-h-screen flex flex-col items-center bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2 text-center">🛋️ Loungewear / Cozycore</h1>
        <p className="mb-4 text-lg font-semibold">Select your gender to see personalized loungewear/cozycore ideas:</p>
        <div className="grid grid-cols-2 gap-6 px-2 md:px-10">
          {genderOptions.map((option) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={option.value}
              className={`rounded-xl shadow-md overflow-hidden border-2 cursor-pointer ${
                gender === option.value ? "border-pink-500" : "border-transparent"
              } transition`}
              onClick={() => setGender(option.value)}
            >
              <img
                src={option.img}
                alt={option.label}
                className="w-full h-40 object-cover"
              />
              <div className="p-3 text-lg font-semibold text-center">{option.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {gender === 'male' && <LoungewearCozycoreMale />}
      {gender === 'female' && <LoungewearCozycoreFemale />}
    </motion.div>
  );
};

export default LoungewearCozycore;
