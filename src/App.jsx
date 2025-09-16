// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./Component/header";
// import HeroSection from "./Component/heroSection";
// import AlumniDirectory from "./Component/alumniDirecroty";
// import UpcomingEvents from "./Component/upCommingEvents";
// import EventsCards from "./Component/eventsCard";
// import NewsUpdates from "./Component/newsUpdates";
// import AlumniNews from "./Component/news";
// import SupportSection from "./Component/Donation";
// import WaysToGive from "./Component/wayToGive";
// import AlumniFooter from "./Component/Footer";
// import "./index.css";
// import Home from "./page/Home";
// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/hero" element={<HeroSection />} /> */}
//           {/* <Route path="/directory" element={<AlumniDirectory />} /> */}
//           {/* <Route path="/upcoming" element={<UpcomingEvents />} />
//           <Route path="/events" element={<EventsCards />} />
//           <Route path="/newsupdate" element={<NewsUpdates />} />
//           <Route path="/alumninews" element={<AlumniNews />} />
//           <Route path="/donate" element={<SupportSection />} />
//           <Route path="/waystogive" element={<WaysToGive />} />
//           <Route path="/footer" element={<AlumniFooter />} /> */}
//         </Routes>
//         <AlumniFooter />
//       </div>
//     </Router>
//   );
// }

import React from 'react'
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home'
import Header from './Component/header'
import AlumniFooter from './Component/Footer'
import AlumniDirectory from './page/alumniDirecroty';
import SupportSection from './page/Donation';
import NewsUpdates from './page/newsUpdates';
import EventsCards from './page/eventsCard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Directory" element={<AlumniDirectory />} />
          <Route path="/Events" element={<EventsCards />} />
          <Route path="/Donate" element={<SupportSection />} />
          <Route path="/News" element={<NewsUpdates />} />
        </Routes>
        <AlumniFooter />
      </BrowserRouter>
    </div>
  );
}
