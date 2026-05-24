import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import FullMenu from './components/FullMenu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-dark min-h-screen mesh-bg bg-fixed flex flex-col relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FullMenu />
        <SignatureDishes />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
