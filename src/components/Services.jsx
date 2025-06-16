import React from "react";

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Subheading and Heading */}
        <p className="text-teal-600 text-lg mb-2">
          Your Expert DMC Partner for Tailored Travel Experiences
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
          Explore the United Kingdom with Roamigo Travels
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center text-green-800">
              {/* Placeholder for icon, e.g., a play icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.803V6.197a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Signature UK Experiences
            </h3>
            <p className="text-gray-600">
              Discover the best of the United Kingdom with our curated tours.
              From royal landmarks and countryside escapes to cultural cities
              and coastal getaways, we design unforgettable travel experiences
              across England, Scotland, Wales, and Northern Ireland.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center text-green-800">
              {/* Placeholder for icon, e.g., a list icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Domestic India Travel
            </h3>
            <p className="text-gray-600">
              Explore India like never before— comfortably, affordably, and
              confidently. We offer pan-India travel solutions including family
              vacations, corporate trips, heritage circuits, and offbeat
              adventures. Tailored to your needs, every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center text-green-800">
              {/* Placeholder for icon, e.g., a line chart icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              B2B Travel Services
            </h3>
            <p className="text-gray-600">
              Your trusted backend partner for seamless travel execution. We
              support travel agents, tour operators, and corporates with
              customized itineraries, competitive pricing, and reliable ground
              support in both the UK and India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
