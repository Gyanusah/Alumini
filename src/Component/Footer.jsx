import React from "react";

export default function AlumniFooter() {
  return (
    <footer className="bg-[#05253f] text-white">
      {/* Newsletter Section */}
      <section className="bg-[#08345f] py-12 text-center">
        <h2 className="text-2xl font-bold">Stay Connected</h2>
        <p className="text-gray-300 max-w-xl mx-auto mt-3">
          Get the latest news, events, and opportunities delivered to your
          inbox. Join our community of engaged alumni.
        </p>
        <form
          className="flex flex-col sm:flex-row justify-center gap-3 mt-6 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed! (demo)");
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-[#06213a] font-semibold rounded-xl px-6 py-3 shadow-lg hover:opacity-90 transition"
          >
            Subscribe →
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">
        {/* Brand & Contact */}
        <div>
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 w-14 h-14 flex items-center justify-center rounded-xl">
              <svg
                className="w-6 h-6 text-[#06213a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                <path d="M11 13h2v7h-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Alumni Connect</h3>
              <p className="text-gray-400 text-sm">Excellence Through Unity</p>
            </div>
          </div>
          <p className="text-gray-300 mt-3">
            Connecting graduates worldwide to foster lifelong relationships,
            professional growth, and continued service to our alma mater.
          </p>
          <div className="mt-4 space-y-3 text-gray-400 text-sm">
            <p>📍 123 University Avenue, Campus City, ST 12345</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ alumni@university.edu</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Alumni Directory
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events Calendar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News & Updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Volunteer
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Make a Gift
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Scholarship Fund
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Annual Fund
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Planned Giving
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Partners
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Join Alumni Network
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Update Your Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Find Classmates
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Regional Chapters
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mentorship Program
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-3">
          <span>Follow us:</span>
          {["facebook", "twitter", "linkedin", "instagram", "youtube"].map(
            (social) => (
              <a
                key={social}
                href="#"
                className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              >
                <span className="sr-only">{social}</span>
                {/* Placeholder for social icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            )
          )}
        </div>
        <div>
          © 2024 Alumni Connect. All rights reserved.{" "}
          <a href="#" className="underline ml-2">
            Privacy Policy
          </a>{" "}
          <a href="#" className="underline ml-2">
            Terms of Service
          </a>
        </div>
        <div>Made with ❤️ by Alumni Relations</div>
      </div>
    </footer>
  );
}
