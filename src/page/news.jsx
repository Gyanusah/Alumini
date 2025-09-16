// import React from "react";


//   const newsItems = [
//     {
//       title: "Class of 1995 Establishes New Scholarship Program",
//       description:
//         "A $2M endowment will support first-generation college students pursuing STEM degrees.",
//       category: "Development Office",
//       date: "November 8, 2024",
//       readTime: "4 min read",
//     },
//     {
//       title: "Alumni Leadership Summit 2024 Highlights",
//       description:
//         "Key insights and connections from this year's most impactful leadership gathering.",
//       category: "Event Coordination",
//       date: "October 28, 2024",
//       readTime: "5 min read",
//     },
//     {
//       title: "Global Alumni Network Reaches 100+ Countries",
//       description:
//         "Celebrating the milestone achievement of our worldwide community expansion.",
//       category: "Global Outreach",
//       date: "October 20, 2024",
//       readTime: "2 min read",
//     },
//   ];

//    export default  AlumniNews = () => {
//     return (
//       <section className="py-12 px-6 bg-gray-50 text-center">
//         <div className="max-w-6xl mx-auto space-y-10">
//           <div className="grid md:grid-cols-2 gap-8">
//             {eventCards.map((event, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <img
//                   src={newsItems.imageUrl}
//                   alt={newsItems.title}
//                   className="w-full h-48 object-cover"
//                 />

//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
//                       {newsItems.type}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                     {newsItems.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{newsItems.description}</p>

//                   <ul className="text-gray-600 space-y-1 mb-4">
//                     <li>📅 {newsItems.date}</li>
//                     <li>⏰ {newsItems.time}</li>
//                     <li>📍 {newsItems.location}</li>
//                     <li>👥 {newsItems.attendance}</li>
//                   </ul>

//                   <div className="flex gap-4">
//                     <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
//                       RSVP
//                     </button>
//                     <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
//                       Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="mt-8 bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300">
//             View All Events 📅
//           </button>
//         </div>
//       </section>
//     );
//   };
// //  AlumniNews;


// Correct way in Vite + React
import React, { useState } from 'react';

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
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
          View All News
        </button>
      </div>
    </div>
  );
};

export default AlumniNews; // ✅ Make sure you export it!
