// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUser,
//   FaCalendarAlt,
//   FaNewspaper,
//   FaHeart,
//   FaSearch,
// } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between p-4 bg-white shadow-md">
//       {/* Logo */}
//       <div className="flex items-center space-x-3">
//         <img
//           src="/path-to-your-logo.png"
//           alt="Alumni Connect Logo"
//           className="w-10 h-10"
//         />
//         <div>
//           <h1 className="text-xl font-bold">Alumni Connect</h1>
//           <p className="text-sm text-gray-500">Excellence Through Unity</p>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex space-x-6 items-center">
//         <Link
//           className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//           to="/"
//         >
//           <span>Home</span>
//         </Link>

//         <Link
//           className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//           aria-current="page"
//           to="/Directory"
//         >
//           {" "}
//           <span>Directory</span>
//         </Link>

//         <Link
//           className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//           to="/Events"
//         >
//           <span>Events</span>
//         </Link>

//         <Link
//           className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//           to="/News"
//         >
//           <FaNewspaper /> <span>News</span>
//         </Link>

//         <Link
//           className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//           to="/Donate"
//         >
//           <FaHeart /> <span>Donate</span>
//         </Link>
//       </nav>

//       {/* Search and Sign In */}
//       <div className="flex items-center space-x-4">
//         <button className="flex items-center bg-gray-100 rounded px-3 py-1 hover:bg-gray-200">
//           <FaSearch className="mr-1" /> Search
//         </button>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Sign In
//         </button>
//       </div>
//     </header>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaNewspaper,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/path-to-your-logo.png"
          alt="Alumni Connect Logo"
          className="w-10 h-10"
        />
        <div>
          <h1 className="text-xl font-bold">Alumni Connect</h1>
          <p className="text-sm text-gray-500">Excellence Through Unity</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 items-center">
        <Link
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          to="/"
        >
          <span>Home</span>
        </Link>

        <Link
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          aria-current="page"
          to="/Directory"
        >
          {" "}
          <span>Directory</span>
        </Link>

        <Link
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          to="/Events"
        >
          <span>Events</span>
        </Link>

        <Link
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          to="/News"
        >
          <FaNewspaper /> <span>News</span>
        </Link>

        <Link
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          to="/Donate"
        >
          <FaHeart /> <span>Donate</span>
        </Link>
      </nav>

      {/* Search and Sign In */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-gray-100 rounded px-3 py-1 hover:bg-gray-200">
          <FaSearch className="mr-1" /> Search
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </header>
  );
}
