import React from "react";

import AlumniDirectory from "../Screen/AlumniDirectory";
import HeroSection from "../Screen/HeroSection";
import EventsCard from "../Screen/EventsCard";
import NewsUpdates from "./News/NewsUpdates";
import AlumniNews from "./News/News";
import WaysToGive from "../Screen/WayToGive";
import SupportSection from "../Screen/Donatioin/Donation";
import UpComingEvents from "../Screen/UpComingEvents";

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
