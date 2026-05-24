import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import CategoryBar from './components/CategoryBar';
import FeaturedMenu from './components/FeaturedMenu';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Banners from './components/Banners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <div className="font-sans text-brand-dark min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <CategoryBar />
      <FeaturedMenu />
      <Reservation />
      <Testimonials />
      <Banners />
      <Contact />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
