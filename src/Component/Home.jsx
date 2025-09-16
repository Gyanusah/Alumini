// import React from 'react'
// import HeroSection from '../Component/heroSection'
// import AlumniDirectory from '../Component/alumniDirecroty'
// import UpcomingEvents from '../Component/upCommingEvents'
// import EventsCards from '../Component/eventsCard'
// import NewsUpdates from '../Component/newsUpdates'
// import AlumniNews from '../Component/news'
// import SupportSection from '../Component/Donation'
// import WaysToGive from '../Component/wayToGive'



// export default function Home() {
//   return (
//     <div>
  
//       <HeroSection/>
//     <AlumniDirectory />
//     <UpcomingEvents />
//      <EventsCards />
//       <NewsUpdates />
//       <AlumniNews />
//        <SupportSection />
//      <WaysToGive />
   
   
//     </div>
//   )
// }
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
