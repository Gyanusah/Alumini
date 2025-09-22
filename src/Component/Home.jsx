import React from "react";
import HeroSection from "../Screen/heroSection";

import AlumniDirectory from "../Screen/AlumniDirectory";

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
