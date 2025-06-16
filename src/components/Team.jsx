import React from 'react';

function Team() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">Our Expert Team</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Roamigo Travels, our team is dedicated to crafting the perfect travel experiences across the UK. With a wealth of experience and a passion for travel, our experts work tirelessly to ensure that every aspect of your client's journey is seamless and unforgettable. Whether it's curating custom itineraries or coordinating logistics on the ground, our team's expertise and attention to detail guarantees a top-notch service that meets all your needs.
        </p>
        {/* Placeholder for team members or additional content */}
        <div className="mt-12">
          {/* Add team member cards or images here */}
        </div>
      </div>
    </section>
  );
}

export default Team; 