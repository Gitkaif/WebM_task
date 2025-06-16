import React, { useState, useEffect } from "react";
import contact from "../assets/contact.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    to_name: "Roamigo Travels",
    from_name: "",
    reply_to: "",
    message: "",
    agent_name: "",
    agency_name: "",
    phone_number: "",
    destination: "",
    travel_dates: "",
    num_passengers: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = "Agent Name is required";
    }
    if (!formData.agency_name.trim()) {
      newErrors.agency_name = "Agency Name is required";
    }
    if (!formData.reply_to.trim()) {
      newErrors.reply_to = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.reply_to)) {
      newErrors.reply_to = "Email ID is invalid";
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Phone Number must be 10 digits";
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required";
    }
    if (!formData.travel_dates.trim()) {
      newErrors.travel_dates = "Travel Dates are required";
    }
    if (!formData.num_passengers || parseInt(formData.num_passengers) <= 0) {
      newErrors.num_passengers = "Number of Passengers is required and must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const messageSent = () => {
    toast.success("Message sent successfully!");
  };

  const messageFailed = () => {
    toast.error("Failed to send message.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_b1vnrg6",
        "template_dtxhvls",
        formData,
        "rwI00Qa9ZjGtH8Ebs"
      );
      messageSent();
      setFormData({
        to_name: "Roamigo Travels",
        from_name: "",
        reply_to: "",
        message: "",
        agent_name: "",
        agency_name: "",
        phone_number: "",
        destination: "",
        travel_dates: "",
        num_passengers: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      messageFailed();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Partner With Us
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join our network of trusted travel partners. Let's create unforgettable experiences together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image and Contact Info */}
          <div className="lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <img
                src={contact}
                alt="Contact Us"
                className="rounded-2xl shadow-xl max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600 group">
                  <div className="bg-green-50 p-3 rounded-full mr-4 group-hover:bg-green-100 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-medium">Info@roamigo.co.in</p>
                    <p className="font-medium">Info.roamigo@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 group">
                  <div className="bg-green-50 p-3 rounded-full mr-4 group-hover:bg-green-100 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3m0 0h.01M8 3v2a2 2 0 002 2h2a2 2 0 002-2V3m0 0h3a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-medium">+91 8433850611</p>
                    <p className="font-medium">+91 8451914611</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Quick Agent Query Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.from_name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Your name"
                  />
                  {errors.from_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.from_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="agency_name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Agency Name
                  </label>
                  <input
                    type="text"
                    id="agency_name"
                    name="agency_name"
                    value={formData.agency_name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.agency_name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Your Agency Name"
                  />
                  {errors.agency_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agency_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone_number"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="Your Phone Number"
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone_number}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="e.g., London, Paris"
                  />
                  {errors.destination && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.destination}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="travel_dates"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Travel Dates
                  </label>
                  <input
                    type="text"
                    id="travel_dates"
                    name="travel_dates"
                    value={formData.travel_dates}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.travel_dates ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="e.g., DD/MM/YYYY - DD/MM/YYYY"
                  />
                  {errors.travel_dates && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.travel_dates}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="num_passengers"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    No. of Passengers
                  </label>
                  <input
                    type="number"
                    id="num_passengers"
                    name="num_passengers"
                    value={formData.num_passengers}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.num_passengers ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="e.g., 2 adults, 1 child"
                  />
                  {errors.num_passengers && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.num_passengers}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="reply_to"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email ID*
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${errors.reply_to ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200`}
                    placeholder="your@email.com"
                  />
                  {errors.reply_to && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.reply_to}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message / Requirements (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors duration-200 flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Contact;
