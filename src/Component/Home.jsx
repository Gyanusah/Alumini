import React from "react";
import HeroSection from "../Pages/heroSection";

import AlumniDirectory from "../Pages/AlumniDirectory";

import UpComingEvents from "../Pages/UpComingEvents";

import EventsCard from "../Pages/EventsCard";
import NewsUpdates from "./News/NewsUpdates";
import AlumniNews from "./News/News";
import WaysToGive from "../Pages/WayToGive";
import SupportSection from "../Pages/Donatioin/Donation";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AlumniDirectory />
      <UpComingEvents />
      <EventsCard />
      <NewsUpdates />
      <AlumniNews />
      <SupportSection />
      <WaysToGive />
    </div>
  );
}
