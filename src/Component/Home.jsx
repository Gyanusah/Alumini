
import React from 'react'
import HeroSection from '../page/heroSection';
import AlumniDirectory from '../page/alumniDirecroty';
import UpcomingEvents from '../page/upCommingEvents';
import EventsCards from '../page/eventsCard';
import NewsUpdates from '../page/newsUpdates';
import AlumniNews from '../page/news';
import WaysToGive from '../page/wayToGive';
import SupportSection from '../page/Donation';

export default function Home() {
  return (
    <div>
      <HeroSection />
       <AlumniDirectory/>
       <UpcomingEvents />
       <EventsCards/>
       <NewsUpdates />
       <AlumniNews />
       <SupportSection />
       <WaysToGive />
    </div>
  );
}
