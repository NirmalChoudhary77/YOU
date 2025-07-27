import LoungewearCozycore from './pages/styles/LoungewearCozycore';
import FormalWear from './pages/styles/FormalWear';
import BusinessCasual from './pages/styles/BusinessCasual';
import AndrogynousStyle from './pages/styles/AndrogynousStyle';
import TomboyStyle from './pages/styles/TomboyStyle';
import KoreanFashion from './pages/styles/KoreanFashion';
import GothAcademia from './pages/styles/GothAcademia';
import Cottagecore from './pages/styles/Cottagecore';
// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from "@/components/theme-provider";
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Skincare from './pages/Skincare';
import OilySkin from './pages/skincare/Oily';
import DrySkin from './pages/skincare/dry';
import CombinationSkin from './pages/skincare/combintion';
import NormalSkin from './pages/skincare/normal';
import SensitiveSkin from './pages/skincare/sensitive';
import Style from './pages/Style';
import Planner from './pages/Planner';
import PersonalExpert from './pages/PersonalExpert';
import Hairstyle from './pages/Hairstyle';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import SkinProfile from './profile/SkinProfile';
import StyleTracker from './profile/StyleTracker';
import HairPlan from './profile/HairPlan';
import ProductHistory from './profile/ProductHistory';
import Submissions from './profile/Submissions';
import MinimalistStyle from './pages/styles/MinimalistStyle';
import DiamondFace from './pages/hairstyles/DiamondFace';
import HeartFace from './pages/hairstyles/HeartFace';
import OblongFace from './pages/hairstyles/OblongFace';
import OvalFace from './pages/hairstyles/OvalFace';
import RoundFace from './pages/hairstyles/RoundFace';
import SquareFace from './pages/hairstyles/SquareFace';
import Streetwear from './pages/styles/Streetwear';
import Chic from './pages/styles/Chic';
import Bohemian from './pages/styles/Bohemian';
import Casual from './pages/styles/Casual';
import VintageRetro from './pages/styles/VintageRetro';
import ClassyElegant from './pages/styles/ClassyElegant';
import Grunge from './pages/styles/Grunge';
import Y2K from './pages/styles/Y2K';
import Athleisure from './pages/styles/Athleisure';
import Preppy from './pages/styles/Preppy';
import StreetwearMale from './pages/styles/StreetwearMale';
import StreetwearFemale from './pages/styles/StreetwearFemale';
import TraditionalIndianWear from './pages/styles/TraditionalIndianWear';
import FaceShapeDetector from "./pages/FaceShapeDetector";
import { supabase } from './lib/supabase.js';

const theme = {
  colors: {
    primary: '#1A1A1A',
    secondary: '#F5F5F5',
    accent: '#FF4081',
    // add more custom colors here
  },
  // add more theme properties here
};

function App() {
  const location = useLocation();
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="bg-[#F5F5F5] dark:bg-[#1a1a1a] text-[#1A1A1A] dark:text-white min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* ...existing routes... */}
                <Route path="/" element={<Home />} />
                <Route path="/skincare" element={<Skincare />} />
                <Route path="/skincare/oily" element={<OilySkin />} />
                <Route path="/skincare/dry" element={<DrySkin />} />
                <Route path="/skincare/combination" element={<CombinationSkin />} />
                <Route path="/skincare/normal" element={<NormalSkin />} />
                <Route path="/skincare/sensitive" element={<SensitiveSkin />} />
                <Route path="/style" element={<Style />} />
                <Route path="/personal-expert" element={<PersonalExpert />} />
                <Route path="/hairstyle" element={<Hairstyle />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/planner" element={
                  <ProtectedRoute>
                    <Planner />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                {/* 🔥 Profile card pages */}
                <Route path="/profile/skin" element={<SkinProfile />} />
                <Route path="/profile/style" element={<StyleTracker />} />
                <Route path="/profile/hair" element={<HairPlan />} />
                <Route path="/profile/products" element={<ProductHistory />} />
                <Route path="/profile/submissions" element={<Submissions />} />
                {/* Minimalist Style page route */}
                <Route path="/style/minimalist" element={<MinimalistStyle />} />
                <Route path="/hairstyles/diamond" element={<DiamondFace />} />
                <Route path="/hairstyles/heart" element={<HeartFace />} />
                <Route path="/hairstyles/oblong" element={<OblongFace />} />
                <Route path="/hairstyles/oval" element={<OvalFace />} />
                <Route path="/hairstyles/round" element={<RoundFace />} />
                <Route path="/hairstyles/square" element={<SquareFace />} />
                <Route path="/style/streetwear" element={<Streetwear />} />
                <Route path="/style/chic" element={<Chic />} />
                <Route path="/style/bohemian" element={<Bohemian />} />
                <Route path="/style/casual" element={<Casual />} />
                <Route path="/style/vintage-retro" element={<VintageRetro />} />
                <Route path="/style/classy-elegant" element={<ClassyElegant />} />
                <Route path="/style/grunge" element={<Grunge />} />
                <Route path="/style/y2k" element={<Y2K />} />
                <Route path="/style/athleisure" element={<Athleisure />} />
                <Route path="/style/preppy" element={<Preppy />} />
                <Route path="/style/cottagecore" element={<Cottagecore />} />
                <Route path="/style/goth-academia" element={<GothAcademia />} />
                <Route path="/style/korean-fashion" element={<KoreanFashion />} />
                <Route path="/style/tomboy" element={<TomboyStyle />} />
                <Route path="/style/androgynous" element={<AndrogynousStyle />} />
                <Route path="/style/business-casual" element={<BusinessCasual />} />
                <Route path="/style/formal-wear" element={<FormalWear />} />
                <Route path="/style/loungewear-cozycore" element={<LoungewearCozycore />} />
                <Route path="/style/traditional-indian-wear" element={<TraditionalIndianWear />} />
                <Route path="/style/streetwear/male" element={<StreetwearMale />} />
                <Route path="/style/streetwear/female" element={<StreetwearFemale />} />
                <Route path="/face-shape-detector" element={<FaceShapeDetector />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </SessionContextProvider>
  );
}

export default App;
