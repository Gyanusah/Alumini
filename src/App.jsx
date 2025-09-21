import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
// import AlumniDirectory from "./page/AlumniDirecroty";
import AlumniDirectory from "./page/AlumniDirectory";

import SupportSection from "./page/Donatioin/Donation";
import NewsUpdates from "./Component/News/NewsUpdates";
import EventsCard from "./page/EventsCard";
import SignUp from "./Component/Signup";
import AllNews from "./Component/News/AllNews";
import Register from "./page/Community/Register";
import DonationForm from "./page/Donatioin/DonationForm";
import AlumniFooter from "./Component/Footer"




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<AlumniDirectory />} />
          <Route path="/events" element={<EventsCard />} />
          <Route path="/donate" element={<SupportSection />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allnews" element={<AllNews />} />
          <Route path="/donationform" element={<DonationForm />} />
          <Route path="/register" element={<Register />} />c{" "}
        </Routes>
        {/* <Login/> */}
        <AlumniFooter />
      </BrowserRouter>
    </div>
  );
}
