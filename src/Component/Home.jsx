import React from "react";
import HeroSection from "../page/heroSection";

import AlumniDirectory from "../page/AlumniDirectory";

import UpComingEvents from "../page/UpComingEvents";

import EventsCard from "../page/EventsCard";
import NewsUpdates from "./News/NewsUpdates";
import AlumniNews from "./News/News";
import WaysToGive from "../page/WayToGive";
import SupportSection from "../page/Donatioin/Donation";

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
