
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AlumniNews = () => {
  const [newsItems] = useState([
    {
      title: "Class of 1995 Establishes New Scholarship Program",
      imageUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      description:
        "A $2M endowment will support first-generation college students pursuing STEM degrees.",
      category: "Development Office",

      date: "November 8, 2024",
      readTime: "4 min read",
    },
    {
      title: "Alumni Leadership Summit 2024 Highlights",
      description:
        "Key insights and connections from this year's most impactful leadership gathering.",
      category: "Event Coordination",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=200&fit=crop",
      date: "October 28, 2024",
      readTime: "5 min read",
    },
    {
      title: "Global Alumni Network Reaches 100+ Countries",
      description:
        "Celebrating the milestone achievement of our worldwide community expansion.",
      category: "Global Outreach",

      date: "October 20, 2024",
      readTime: "2 min read",
    },
  ]);

  const navigate = useNavigate();
    const AllNews = (e) => {
      e.preventDefault();
      navigate("/AllNews");
     
    };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Alumni News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
              <span>{item.date}</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors" onClick={AllNews}>
          View All News
        </button>
      </div>
    </div>
  );
};

export default AlumniNews; // ✅ Make sure you export it!
