import React from "react";
import about from "../assets/about.png";

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 w-full overflow-x-hidden">
        {/* Image Placeholder */}
        <div className="md:w-1/2">
          <img
            src={about}
            alt="About Us"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            About Roamigo Travels
          </h2>
          <p className="text-gray-600 text-lg">
            Your B2B Travel Partner — From London to Ladakh At Roamigo, we
            specialize in curating seamless, experience-rich travel solutions
            for travel agents, tour operators, and corporate planners. As UK &
            Ireland destination experts, we bring deep on-ground knowledge,
            strong DMC networks, and competitive pricing to help you deliver
            unforgettable journeys to your clients. But our reach doesn’t stop
            at Heathrow — we also design and operate tailor-made domestic travel
            experiences across India, from royal Rajasthan to the backwaters of
            Kerala. We work exclusively B2B, giving you white-label support,
            fast responses, and destination expertise — so you shine, and your
            clients return for more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
