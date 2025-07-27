// src/pages/Login.jsx
import React, { useState } from 'react';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginWithEmail = async (e) => {
    e.preventDefault();
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      window.location.replace('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (googleError) {
        setError(googleError.message);
        return;
      }
      // On success, Supabase will redirect to your configured redirect URL
      // You may want to handle navigation after redirect in your app
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-24 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Log In to YOU</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={loginWithEmail} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded-lg" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded-lg" />
        <button type="submit" className="w-full bg-[#FFDDC1] text-black py-2 rounded-full">Log In</button>
      </form>
      <p className="my-4 text-center text-sm">or</p>
      <button onClick={loginWithGoogle} className="w-full border py-2 rounded-full">Continue with Google </button>
    </div>
  );
};

export default Login;
