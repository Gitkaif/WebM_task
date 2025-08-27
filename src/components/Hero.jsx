import React from 'react';
import heroo from '../assets/heroo.png';
import hero2 from '../assets/hero2.png';

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white mt-6 min-h-[600px]">
        <div className="w-full px-4 sm:px-6 md:px-8 py-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
            
            {/* Left block */}
            <div className="order-2 lg:order-1 mx-auto lg:ml-16 xl:ml-24 text-center lg:text-left">
              <p className="text-slate-900 font-extrabold tracking-tighter leading-none mb-2 text-3xl sm:text-5xl md:text-6xl">
                YEP, IT'S
              </p>
              <h1 className="text-slate-900 font-extrabold tracking-tighter leading-none mb-6 text-4xl sm:text-7xl md:text-8xl">
                ALL IN ONE APP
              </h1>
              <p className="text-slate-700 text-lg sm:text-xl md:text-2xl tracking-tight max-w-2xl mb-8">
                Invest in thousands of stocks, crypto, ETFs... all in one<br className="hidden sm:block"/>
                easy-to-use app
              </p>
              <button className="w-full sm:w-auto flex items-center justify-center rounded-full bg-[#00c805] text-white font-semibold px-6 sm:px-8 md:px-12 py-3 text-base sm:text-lg shadow-sm hover:brightness-95 transition">
                Join eToro
              </button>
            </div>

            {/* Right block */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={heroo}
                alt="Hero"
                className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-6 text-center lg:text-right">
            <p className="text-slate-600 text-sm sm:text-base underline font-bold mr-10">
              **Terms and Conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* AI Reveal Section */}
      <section className="relative w-full bg-[#0b0f12] text-white py-16">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            
            {/* Left copy */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-sm tracking-wider mb-2 text-xl">eToro Unlocked</p>
              <h2 className="font-extrabold leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl">
                Redefining Investing 
                <span className="text-[#00c805]"> with the Power of AI</span>
              </h2>
              <button className="inline-flex mt-6 h-12 w-48 items-center justify-center rounded-full border border-[#00c805] text-[#00c805] px-5 py-2 font-semibold hover:bg-[#00c805] hover:text-[#0b0f12] transition">
                See the reveal
              </button>
            </div>

            {/* Right image */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-[#00c805] rounded-full max-w-[400px] -z-10 mx-auto" />
              <img
                src={hero2}
                alt="AI Reveal"
                className="w-full max-w-[460px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
