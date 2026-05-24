import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import CategoryBar from './components/CategoryBar';
import FeaturedMenu from './components/FeaturedMenu';
import Banners from './components/Banners';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <div className="font-sans text-brand-dark min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <CategoryBar />
      <FeaturedMenu />
      <Banners />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
