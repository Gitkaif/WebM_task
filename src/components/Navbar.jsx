import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <>
    {/* Top info stripe (fixed) */}
    <div className="fixed top-0 left-0 w-full text-white text-xs md:text-base py-1 z-50 h-[36px]" style={{ backgroundColor: '#66667A' }}>
      <div className="w-full px-2 md:px-4 flex items-center justify-center gap-1">
        <span className="opacity-90">eToro is a multi-asset investment platform. Crypto investments are risky and highly volatile.Taxe may apply. Understand the risks</span>
        <a href="#" className="underline hover:no-underline">here</a>
      </div>
    </div>

    {/* Navbar (scrolls with page) */}
    <nav className="bg-white w-full mt-[28px] md:mt-[32px] border-b border-slate-200 z-40 h-[80px]">
      <div className="w-full px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between relative">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-10">
          <img src={logo} alt="Logo" className="h-16 w-auto cursor-pointer" />
          <div className="hidden lg:flex items-center gap-10 text-xl">
            {/* Trading dropdown */}
            <div className="relative group py-4">
              <a href="#" className="text-slate-700 hover:text-slate-900">Trading</a>
              <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Trade Markets on eToro</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Trading Platform</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Crypto on eToro</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">CFD Trading</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Local Trading</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Demo Account</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Fees</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Market Hours and Events</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Professional Account</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investing dropdown */}
            <div className="relative group py-4">
              <a href="#" className="text-slate-700 hover:text-slate-900">Investing</a>
              <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Stocks</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Copy Top Investors</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Investment Portfolios</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Popular Investor Program</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Staking Crypto</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">eToro Earnings Reports Calendar</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Delta</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">ESG</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top Markets dropdown */}
            <div className="relative group py-4">
              <a href="#" className="text-slate-700 hover:text-slate-900">Top Markets</a>
              <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Cryptocurrencies</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Stocks</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Commodities</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Currencies</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">All Markets</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education dropdown */}
            <div className="relative group py-4">
              <a href="#" className="text-slate-700 hover:text-slate-900">Education</a>
              <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">eToro Academy</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">News and Analysis</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">In Depth Analysis</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Digest & Invest</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Loud Investing</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Retail Investor Beat</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Account Security</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company dropdown */}
            <div className="relative group py-4">
              <a href="#" className="text-slate-700 hover:text-slate-900">Company</a>
              <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                  <ul className="space-y-3 text-base">
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">eToro Unlocked</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">About</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Help Center</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Investor Relations</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Media Center</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Careers</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">eToro Club</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">eToro Money</a></li>
                    <li><a href="#" className="hover:text-slate-900 text-slate-700">Socially Responsible</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions (stays at far right) */}
        <div className="hidden md:flex items-center gap-6 text-slate-700 text-xl">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            <span>Search</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="UK flag" className="w-5 h-5" />
            <span>English (UK)</span>
          </div>
          <button className="text-slate-700 hover:text-slate-900">Login</button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;