import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const PersonalExpert = () => {
  const [form, setForm] = useState({
    name: '',
    skinType: '',
    bodyGoals: '',
    routineLevel: 'basic',
    concerns: '',
    gender: '', // ⬅️ new field
  });

  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;

      // ✅ Step 1: Upload file to Supabase storage
      if (file) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('uploads') // name of your bucket
          .upload(`glowup/${Date.now()}_${file.name}`, file);

        if (uploadError) {
          console.error('❌ Upload failed:', uploadError.message);
          return;
        }

        // ✅ Step 2: Get public URL
        const { data: publicUrlData } = supabase
          .storage
          .from('uploads')
          .getPublicUrl(uploadData.path);

        imageUrl = publicUrlData.publicUrl;
      }


      // ✅ Step 3: Save form + file URL + user_id to database
      const { data: userData } = await supabase.auth.getUser();
      const { error: insertError } = await supabase
        .from('submissions')
        .insert([
          {
            ...form,
            imageUrl,
            user_id: userData?.user?.id, // save user ID
          },
        ]);

      if (insertError) {
        console.error('❌ Saving to DB failed:', insertError.message);
        return;
      }

      setSubmitted(true); // show success UI
    } catch (err) {
      console.error('❌ Unexpected error:', err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 pb-10"
    >
      <div className="pt-24 px-6 pb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">✨ Get Your Personalized Glow-Up Plan</h1>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold mt-6">
            ✅ Form submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <select name="skinType" value={form.skinType} onChange={handleChange} required className="w-full p-3 border rounded-lg">
              <option value="">Select Skin Type</option>
              <option value="Oily">Oily</option>
              <option value="Dry">Dry</option>
              <option value="Combination">Combination</option>
              <option value="Sensitive">Sensitive</option>
            </select>
            {/* Gender select */}
            <select name="gender" value={form.gender} onChange={handleChange} required className="w-full p-3 border rounded-lg">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </select>
            <input name="bodyGoals" type="text" placeholder="Glow/Confidence Goals" value={form.bodyGoals} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <select name="routineLevel" value={form.routineLevel} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option value="basic">Beginner Routine</option>
              <option value="advanced">Advanced Routine</option>
            </select>
            <textarea name="concerns" placeholder="Your concerns (acne, dull skin...)" value={form.concerns} onChange={handleChange} rows="4" className="w-full p-3 border rounded-lg" />

            {/* File Upload */}
            <input type="file" onChange={handleFileChange} accept="image/*" className="w-full" />

            <button type="submit" className="w-full bg-[#FFDDC1] text-black py-3 rounded-full hover:scale-105 transition">
              Submit & Get My Plan
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default PersonalExpert;
