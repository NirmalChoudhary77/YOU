// src/pages/Signup.jsx
import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const { error: signUpError } = await supabase.auth.signUp({ email, password });
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-24 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up for YOU</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={register} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded-lg" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded-lg" />
        <button type="submit" className="w-full bg-[#FFDDC1] text-black py-2 rounded-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
