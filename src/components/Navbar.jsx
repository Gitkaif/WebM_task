import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const services = {
    Trading: [
      "Trade Markets on eToro",
      "Trading Platform",
      "Crypto on eToro",
      "CFD Trading",
      "Local Trading",
      "Demo Account",
      "Fees",
      "Market Hours and Events",
      "Professional Account"
    ],
    Investing: [
      "Stocks",
      "Copy Top Investors",
      "Investment Portfolios",
      "Popular Investor Program",
      "Staking Crypto",
      "eToro Earnings Reports Calendar",
      "Delta",
      "ESG"
    ],
    "Top Markets": [
      "Cryptocurrencies",
      "Stocks",
      "Commodities",
      "Currencies",
      "All Markets"
    ],
    Education: [
      "eToro Academy",
      "News and Analysis",
      "In Depth Analysis",
      "Digest & Invest",
      "Loud Investing",
      "Retail Investor Beat",
      "Account Security"
    ],
    Company: [
      "eToro Unlocked",
      "About",
      "Help Center",
      "Investor Relations",
      "Media Center",
      "Careers",
      "eToro Club",
      "eToro Money",
      "Socially Responsible"
    ]
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Top stripe */}
      <div
        className="fixed top-0 left-0 w-full text-white text-xs md:text-base py-1 z-50 h-[36px]"
        style={{ backgroundColor: '#66667A' }}
      >
        <div className="w-full px-2 md:px-4 flex items-center justify-center gap-1">
          <span className="opacity-90">
            eToro is a multi-asset investment platform. Crypto investments are
            risky and highly volatile.Taxe may apply. Understand the risks
          </span>
          <a href="#" className="underline hover:no-underline">
            here
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white w-full mt-[28px] md:mt-[32px] border-b border-slate-200 z-40 h-[80px]">
        <div className="w-full px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between relative">
          {/* Left */}
          <div className="flex items-center gap-10">
            <img src={logo} alt="Logo" className="h-16 w-auto cursor-pointer" />

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 text-xl">
              {Object.keys(services).map((service) => (
                <div key={service} className="relative group py-4">
                  <a
                    href="#"
                    className="text-slate-700 hover:text-slate-900"
                  >
                    {service}
                  </a>
                  <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                    <div className="w-[350px] rounded-xl shadow-xl border border-slate-200 bg-white p-6">
                      <ul className="space-y-3 text-base">
                        {services[service].map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="hover:text-slate-900 text-slate-700"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-slate-700 text-xl">
            <div className="flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span>Search</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                alt="UK flag"
                className="w-5 h-5"
              />
              <span>English (UK)</span>
            </div>
            <button className="text-slate-700 hover:text-slate-900">Login</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            {/* Login button left of menu */}
            <button className="mr-4 text-slate-700 font-medium">Login</button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-slate-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Collapsible Sections */}
          <div className="px-6 py-6 overflow-y-auto h-[calc(100%-64px)]">
            {Object.keys(services).map((section) => (
              <div key={section} className="mb-4 border-b border-slate-200">
                <button
                  className="w-full flex justify-between items-center py-2 text-left text-lg font-medium text-slate-700"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section ? null : section
                    )
                  }
                >
                  <span>{section}</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      expandedSection === section ? 'rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSection === section && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {services[section].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-slate-700 hover:text-slate-900 block py-1"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Language selector */}
            <div className="flex items-center gap-2 mt-6">
              <img
                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                alt="UK flag"
                className="w-5 h-5"
              />
              <span className="text-slate-700 font-medium">English (UK)</span>
            </div>

            {/* Help text */}
            <div className="flex items-center gap-2 mt-4 text-slate-700">
              <span className="bg-gray-200 rounded-full p-1 text-sm">?</span>
              <span>Help</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full flex items-center justify-center rounded-full border-2 border-[#00c805] text-[#00c805] font-semibold px-8 py-3 text-lg hover:bg-[#00c805]/10 transition">
                Download the App
              </button>
              <button className="w-full flex items-center justify-center rounded-full bg-[#00c805] text-white font-semibold px-8 py-3 text-lg shadow-sm hover:brightness-95 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
