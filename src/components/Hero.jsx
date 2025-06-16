import React from 'react';
import hero from '../assets/hero.png';

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between mt-20">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-800 leading-tight mb-6 break-words">
            Tailor-Made Travel Experiences Across the UK and Beyond
          </h1>
          <p className="text-gray-600 text-lg mb-8 break-words">
            At Roamigo, we combine local insight with global reach.
            As UK destination specialists, we craft immersive experiences across England, Scotland, Wales, and Northern Ireland — from luxury getaways to heritage tours.
            We also bring the same level of care and customization to domestic travel within India, helping you discover hidden gems, heritage cities, and breathtaking landscapes
          </p>
          <div className="flex space-x-4">
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-md hover:bg-green-50" onClick={() => window.location.href = '#contact'}>
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <img src={hero} alt="Explore the United Kingdom" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero; 