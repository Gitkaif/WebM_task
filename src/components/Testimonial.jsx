import React from "react";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Roamigo's B2B support helped us double our UK bookings last year!",
      author: "SWARAJ TRAVELS",
    },
    {
      quote:
        "I usually dread custom requests, but with Roamigo's backend support, I was able to close three group bookings last month alone. They just get the B2B game..",
      author: "NEHA T., TOUR OPERATOR",
    },
    {
      quote:
        "Our family trip to Kerala was simply unforgettable! Roamigo took care of everything — from choosing the best houseboat to arranging a surprise anniversary dinner. It felt personal, not just planned. Highly recommended!",
      author: "Harshad Pawar",
    },
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-50"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-green-600 font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            What Our Partners Say
          </h2>
          <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 text-base md:text-lg">
            Trusted by leading travel agencies 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Decorative quote icon */}
              <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-serif">
                "
              </div>

              <div className="text-center">
                <p className="text-base md:text-lg italic text-gray-700 mb-4 md:mb-6 font-serif leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1">
                  <p className="text-gray-800 font-bold text-base md:text-lg">
                    {testimonial.author}
                  </p>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
