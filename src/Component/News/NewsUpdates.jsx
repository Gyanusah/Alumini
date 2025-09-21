import React from "react";

const newsItem = {
  imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
  type: "Innovation",
  label: "Featured Story",
  title: "Alumni Innovation Lab Launches $50M Fund",
  description:
    "Supporting the next generation of entrepreneurs with cutting-edge technology and sustainable solutions.",
  author: "Alumni Relations Office",
  date: "November 10, 2024",
  readTime: "3 min read",
};

export default function NewsUpdates() {
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-blue-900">
          Alumni News & Updates
        </h2>
        <p className="text-gray-600 mb-8">
          Stay informed about the latest achievements, initiatives, and stories
          from our global alumni community.
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-full md:w-1/2 object-cover"
          />

          <div className="p-6 text-left">
            <div className="flex space-x-2 mb-3">
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                {newsItem.type}
              </span>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                {newsItem.label}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              {newsItem.title}
            </h3>
            <p className="text-gray-700 mb-4">{newsItem.description}</p>

            <ul className="text-gray-600 space-y-1 mb-4">
              <li>🧑 {newsItem.author}</li>
              <li>📅 {newsItem.date}</li>
              <li>⏱️ {newsItem.readTime}</li>
            </ul>

            <div className="flex gap-4">
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300">
                Read Full Story →
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
