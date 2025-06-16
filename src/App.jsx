import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Testimonial />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 