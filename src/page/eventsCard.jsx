import React from "react";
import { useNavigate } from "react-router-dom";

const eventCards = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    type: "Networking",
    title: "Tech Career Networking",
    description:
      "Connect with alumni in the tech industry and explore career opportunities.",
    date: "November 20, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Tech Hub, Silicon Valley",
    attendance: "85 / 120 attending",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
    type: "Meetup",
    title: "Regional Chapter Meetup - NYC",
    description:
      "Casual meetup for New York area alumni to reconnect and share experiences.",
    date: "November 30, 2024",
    time: "12:00 PM - 3:00 PM",
    location: "Central Park Pavilion",
    attendance: "32 / 60 attending",
  },
];

export default function EventsCards() {
  const navigate = useNavigate();
  const AllEvents = (e) => {
    e.preventDefault();
    navigate("/AllEvents");
   
  };
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          {eventCards.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>📅 {event.date}</li>
                  <li>⏰ {event.time}</li>
                  <li>📍 {event.location}</li>
                  <li>👥 {event.attendance}</li>
                </ul>

                <div className="flex gap-4">
                  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                    RSVP
                  </button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300" onClick={AllEvents}>
          View All Events 📅
        </button>
      </div>
    </section>
  );
}
