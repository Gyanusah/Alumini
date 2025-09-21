import React from "react";




const sampleNews = [
  {
    id: 1,
    type: "Achievement",
    title: "Dr. Priya Sharma wins National Science Award",
    date: "September 12, 2025",
    excerpt:
      "Dr. Priya Sharma (Batch 2005) has been awarded the National Science Award for her research in biotechnology. She will be the keynote speaker at the Annual Alumni Meet 2025.",
    image:
      "https://promotionalwears.com/image/cache/catalog/data/Trophies/custom-trophy/global-achievement-award-trophy-500x500.webp", // image type: achievement / award photo
  },
  {
    id: 2,
    type: "Event",
    title: "Annual Alumni Meet 2025 — Save the Date",
    date: "October 18, 2025",
    excerpt:
      "Join us on campus for networking, panels, and a campus tour. Registration opens soon.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUllCL7AvAMNP_5ziX8M_wSWFdyxepNzt5Og&s", // image type: event photo (group/reunion)
  },
  {
    id: 3,
    type: "Campus Update",
    title: "New Innovation Lab inaugurated",
    date: "August 30, 2025",
    excerpt:
      "The College inaugurated a new Innovation & Entrepreneurship Lab funded partly by alumni donations.",
    image:
      "https://media.collegedekho.com/media/img/institute/crawled_images/None/GFDDGHGHGDFH.jpeg", // image type: campus / infrastructure photo
  },
  {
    id: 4,
    type: "Spotlight",
    title: "Alumnus Spotlight: Arjun Mehta (Batch 2010)",
    date: "July 05, 2025",
    excerpt:
      "From student-run startups to scaling global teams — Arjun shares career lessons and how he mentors current students.",
    image:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // image type: alumni portrait/profile photo
  },
  {
    id: 5,
    type: "Announcement",
    title: "Volunteer mentors needed for Spring cohort",
    date: "September 02, 2025",
    excerpt:
      "We need alumni volunteers to mentor final-year students. Short weekly commitment.",
    image:
      "https://img.freepik.com/free-psd/important-announcement-social-media-post-with-megaphone-3d_47987-20456.jpg", // image type: flyer/graphic for announcements
  },
];

export default function AllNews() {
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">
            College Alumni News
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Latest updates, features and announcements from our alumni
            community.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Search news..."
            className="w-48 md:w-64 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <select className="rounded-md border px-3 py-2 text-sm">
            <option value="all">All</option>
            <option value="Achievement">Achievements</option>
            <option value="Event">Events</option>
            <option value="Campus Update">Campus Updates</option>
            <option value="Spotlight">Spotlight</option>
            <option value="Announcement">Announcements</option>
          </select>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: Featured / list */}
        <div className="md:col-span-2">
          {/* Featured card */}
          <article className="mb-6 rounded-2xl shadow-lg overflow-hidden bg-white">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 flex items-center justify-center">
                <img
                  src={sampleNews[0].image}
                  alt={sampleNews[0].title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5 md:w-2/3">
                <h2 className="text-xl font-semibold">{sampleNews[0].title}</h2>
                <div className="text-xs text-gray-500 mt-1">
                  {sampleNews[0].date} • {sampleNews[0].type}
                </div>
                <p className="mt-3 text-gray-700">{sampleNews[0].excerpt}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-md border text-sm">
                    Read more
                  </button>
                  <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* News list */}
          <div className="space-y-4">
            {sampleNews.slice(1).map((item) => (
              <article key={item.id} className="rounded-lg border p-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="text-xs text-gray-500">
                      {item.date} • {item.type}
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">{item.excerpt}</p>
                  </div>
                  <div className="hidden md:block ml-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="text-sm px-3 py-1 rounded border">
                    Learn more
                  </button>
                  <button className="text-sm px-3 py-1 rounded bg-indigo-600 text-white">
                    RSVP
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right column: Quick links / small widgets */}
        <aside className="space-y-5">
          <div className="sticky top-4 rounded-lg border p-4 bg-white">
            <h4 className="font-semibold">Upcoming Events</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>
                <div className="font-medium">Annual Alumni Meet</div>
                <div className="text-xs text-gray-500">Oct 18, 2025</div>
              </li>
              <li>
                <div className="font-medium">Webinar: Careers in AI</div>
                <div className="text-xs text-gray-500">Nov 5, 2025</div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 bg-white">
            <h4 className="font-semibold">Alumni Spotlight</h4>
            <div className="mt-3">
              <img
                src="profile.jpg"
                alt="Alumni Spotlight"
                className="h-16 w-16 object-cover rounded-full mb-2"
              />
              <div className="text-sm font-medium">
                Arjun Mehta (Batch 2010)
              </div>
              <div className="text-xs text-gray-500">Mentor & Entrepreneur</div>
            </div>
          </div>

          <div className="rounded-lg border p-4 bg-white">
            <h4 className="font-semibold">Get Involved</h4>
            <p className="text-sm text-gray-600 mt-2">
              Volunteer as a mentor or donate to the Innovation Lab.
            </p>
            <button className="mt-3 w-full text-sm py-2 rounded bg-indigo-600 text-white">
              Become a mentor
            </button>
          </div>
        </aside>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} College Alumni Office — Stay connected.
      </footer>
    </section>
  );
}
