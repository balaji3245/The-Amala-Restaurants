import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedMenu from './components/FeaturedMenu';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <FeaturedMenu />
      <Facilities />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
