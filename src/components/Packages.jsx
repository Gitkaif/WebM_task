import React from 'react';

function Packages() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1: Essential Explorer */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Essential Explorer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ideal for budget-conscious travelers seeking to explore the UK with essential services. This plan includes all the necessary arrangements for a memorable experience. Starting From
              </p>
              <p className="text-3xl font-bold text-green-700 mb-6">£1,099 <span className="text-base font-normal text-gray-600">per person/trip</span></p>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h4>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Airport transfers</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 3-star hotel accommodation</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Guided city tours</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 24/7 customer support</li>
              </ul>
            </div>
            <button className="w-full bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">Choose Essential</button>
          </div>

          {/* Card 2: Classic Adventurer */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Classic Adventurer</h3>
              <p className="text-gray-600 text-sm mb-4">
                Perfect for travellers looking for a balanced experience with a mix of comfort and adventure. Enjoy additional perks and more personalised services. Starting From
              </p>
              <p className="text-3xl font-bold text-green-700 mb-6">£1,399 <span className="text-base font-normal text-gray-600">per person/trip</span></p>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h4>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Airport transfers</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 4-star hotel accommodation</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Guided city tours</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Exclusive local experiences</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Priority customer support</li>
              </ul>
            </div>
            <button className="w-full bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">Choose Classic</button>
          </div>

          {/* Card 3: Luxury Voyager */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Luxury Voyager</h3>
              <p className="text-gray-600 text-sm mb-4">
                Designed for discerning travellers who desire the ultimate in luxury and exclusivity. This plan offers premium services and bespoke experiences. Starting From
              </p>
              <p className="text-3xl font-bold text-green-700 mb-6">£1,999 <span className="text-base font-normal text-gray-600">per person/trip</span></p>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h4>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Chauffeur-driven airport transfers</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 5-star hotel accommodation</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Private guided tours</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Customised local experiences</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 24/7 concierge service</li>
              </ul>
            </div>
            <button className="w-full bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">Choose Luxury</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages; 