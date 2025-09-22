import React from "react";
import HeroSection from "../Page/heroSection";

import AlumniDirectory from "../Page/AlumniDirectory";

import UpComingEvents from "../Page/UpComingEvents";

import EventsCard from "../Page/EventsCard";
import NewsUpdates from "./News/NewsUpdates";
import AlumniNews from "./News/News";
import WaysToGive from "../Page/WayToGive";
import SupportSection from "../Page/Donatioin/Donation";

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
