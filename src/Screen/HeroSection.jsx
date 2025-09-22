import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Annual Alumni Meet",
    date: "Nov 15, 2025",
    location: "New York, USA",
  },
  { title: "Tech Networking Night", date: "Dec 5, 2025", location: "Online" },
  {
    title: "Scholarship Fundraiser",
    date: "Jan 20, 2026",
    location: "London, UK",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const Donation = (e) => {
    e.preventDefault();
    navigate("/donationform");
  };
  const join = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="h-[70vh] md:h-[50vh] lg:h-[60vh]"
    >
      {/* Hero Section */}
      <SwiperSlide className="bg-blue-900 text-white flex  justify-center items-center text-center px-4 md:px-6 lg:px-12">
        <div className="mt-20">
          <div className="inline-flex items-center bg-blue-700 rounded-full px-3 py-1 mb-4 md:mb-6 text-sm md:text-base">
            <span className="mr-2">👥</span>
            Join 15,000+ Alumni Worldwide
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Connect. Inspire.{" "}
            <span className="text-yellow-400">Transform.</span>
          </h1>
          <p className="mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
            Welcome to the official alumni network where lifelong connections
            flourish.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-4 md:mb-10">
            <button
              className="bg-yellow-400 text-blue-900 font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-yellow-300 transition"
              onClick={join}
            >
              Join Our Community →
            </button>
            <button className="border border-yellow-400 text-yellow-400 font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-yellow-400 hover:text-blue-900 transition">
              Explore Directory
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* About Section */}
      <SwiperSlide className="bg-gradient-to-r from-purple-600 to-pink-600 text-blue-900 flex items-center justify-center text-center px-4 md:px-6 lg:px-10 h-full">
        <div className="mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            About Our Alumni Network
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
            Our alumni community brings together graduates from across the
            world, fostering lifelong connections, professional growth, and
            opportunities to give back.
          </p>
          <button className="bg-blue-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More →
          </button>
        </div>
      </SwiperSlide>

      {/* Events Section */}
      <SwiperSlide className="bg-gradient-to-r from-blue-900 to-blue-400 flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-12">
        <div className="mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {event.date}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>

      {/* Support / Donation Section */}
      <SwiperSlide className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-12">
        <div className="mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Support Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
            Help us create scholarships, build facilities, and support student
            initiatives. Every contribution makes a lasting impact.
          </p>
          <button
            className="bg-blue-900 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={Donation}
          >
            Donate Now 💙
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
