import React from "react";
import HeroSection from "../Screens/heroSection";

import AlumniDirectory from "../Screens/AlumniDirectory";

import EventsCard from "../Screens/EventsCard";
import NewsUpdates from "./News/NewsUpdates";
import AlumniNews from "./News/News";
import WaysToGive from "../Screens/WayToGive";
import SupportSection from "../Screens/Donatioin/Donation";
import UpComingEvents from "../Screens/UpComingEvents";

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
