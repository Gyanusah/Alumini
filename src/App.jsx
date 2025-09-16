import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import AlumniFooter from "./Component/Footer";
import AlumniDirectory from "./page/alumniDirecroty";
import SupportSection from "./page/Donation";
import NewsUpdates from "./page/newsUpdates";
import EventsCards from "./page/eventsCard";

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
