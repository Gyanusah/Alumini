import React from "react";

const events = [
  {
    type: "Gala",
    tag: "Featured Event",
    title: "Annual Alumni Gala 2024",
    description:
      "Join us for an elegant evening celebrating our achievements and connecting with fellow alumni.",
    date: "December 15, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom, Downtown Hotel",
    attendance: "450 / 500 attending",
    imageUrl:
      "https://images.occasiongenius.com/uploads/r/8/a/r8a7op7cvn/2022/09/06/20220906181720-8cce3612.jpg",
  },
    // {
    //   type: "Networking",
    //   tag: "Special Event",
    //   title: "Professional Networking Meet 2024",
    //   description:
    //     "An opportunity to network, learn, and share experiences with fellow professionals.",
    //   date: "October 10, 2024",
    //   time: "5:00 PM - 8:00 PM",
    //   location: "City Convention Center",
    //   attendance: "300 / 400 attending",
    //   imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    // },
  //   {
  //     type: "Meetup",
  //     tag: "Casual Event",
  //     title: "Local Alumni Meetup",
  //     description:
  //       "Casual get-together to reconnect with local alumni over snacks and drinks.",
  //     date: "November 5, 2024",
  //     time: "6:00 PM - 9:00 PM",
  //     location: "Community Hall, Downtown",
  //     attendance: "150 / 200 attending",
  //     imageUrl: "/event3.jpg",
  //   },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Upcoming Events</h2>
      <p className="text-gray-600 mb-10">
        Stay connected through our exclusive alumni events, from networking
        sessions to celebratory galas.
      </p>

      <div className="space-y-10 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full md:w-1/2 object-cover"
            />

            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-4">{event.description}</p>

                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>📅 {event.date}</li>
                  <li>⏰ {event.time}</li>
                  <li>📍 {event.location}</li>
                  <li>👥 {event.attendance}</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300">
                  Register Now →
                </button>
                <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
