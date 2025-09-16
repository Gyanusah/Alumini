
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center bg-blue-700 rounded-full px-4 py-1 mb-6 text-sm">
          <span className="mr-2">👥</span>
          Join 15,000+ Alumni Worldwide
        </div>
        <div className="absolute inset-0 z-0">
          
         
          <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Connect. Inspire. <span className="text-yellow-400">Transform.</span>
        </h1>

        <p className="mb-8 text-lg">
          Welcome to the official alumni network where lifelong connections
          flourish, opportunities are shared, and our university legacy
          continues to grow.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300">
            Join Our Community →
          </button>
          <button className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-blue-900">
            Explore Directory
          </button>
        </div>

        <div className="flex justify-center gap-12 text-lg">
          <div>
            <span className="text-2xl font-bold">15,000+</span>
            <br /> Active Alumni
          </div>
          <div>
            <span className="text-2xl font-bold">85+</span>
            <br /> Countries
          </div>
          <div>
            <span className="text-2xl font-bold">500+</span>
            <br /> Annual Events
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="block w-6 h-6 border-2 border-white rounded-full animate-bounce"></span>
      </div>
    </section>
  );
}

