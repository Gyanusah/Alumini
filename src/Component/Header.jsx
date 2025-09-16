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
  FaNewspaper,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/30-Alumni-Logos-to-Make-an-Authoritative-Network/logo-design-by-sbelogd-designcrowd.png"
            alt="Alumni Connect Logo"
            className="w-20 h-20"
          />
          <div>
            <h1 className="text-xl font-bold">Alumni Connect</h1>
        
          </div>
        </div>

        {/* Hamburger Button (Visible on Small Screens) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-gray-700 hover:text-blue-600" to="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/Directory">
            Directory
          </Link>
          <Link className="text-gray-700 hover:text-blue-600" to="/Events">
            Events
          </Link>
          <Link
            className="flex items-center text-gray-700 hover:text-blue-600"
            to="/News"
          >
            <FaNewspaper className="mr-1" /> News
          </Link>
          <Link
            className="flex items-center text-gray-700 hover:text-blue-600"
            to="/Donate"
          >
            <FaHeart className="mr-1" /> Donate
          </Link>
        </nav>

        {/* Desktop Search and Sign In */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center bg-gray-100 rounded px-3 py-1 hover:bg-gray-200">
            <FaSearch className="mr-1" /> Search
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu (with proper height animation) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 p-4 bg-white">
          <Link
            className="text-gray-700 hover:text-blue-600"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-600"
            to="/Directory"
            onClick={() => setMenuOpen(false)}
          >
            Directory
          </Link>

          <Link
            className="text-gray-700 hover:text-blue-600"
            to="/Events"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>

          <Link
            className="flex items-center text-gray-700 hover:text-blue-600"
            to="/News"
            onClick={() => setMenuOpen(false)}
          >
            <FaNewspaper className="mr-1" /> News
          </Link>

          <Link
            className="flex items-center text-gray-700 hover:text-blue-600"
            to="/Donate"
            onClick={() => setMenuOpen(false)}
          >
            <FaHeart className="mr-1" /> Donate
          </Link>

          <button className="flex items-center bg-gray-100 rounded px-3 py-1 hover:bg-gray-200 mt-4">
            <FaSearch className="mr-1" /> Search
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}
