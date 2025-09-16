import React from "react";
import {
  Heart,
  Zap,
  BookOpen,
  Users,
  Building2,
  Trophy,
  Leaf,
} from "lucide-react";

const stats = [
  { icon: Users, label: "2,500+", desc: "Students Supported" },
  { icon: Building2, label: "$15M", desc: "Facilities Built" },
  { icon: Trophy, label: "150+", desc: "Scholarships Awarded" },
  { icon: Leaf, label: "50+", desc: "Green Initiatives" },
];

const campaigns = [
  {
    title: "Student Emergency Fund",
    desc: "Supporting students facing unexpected financial hardships",
    raised: 187500,
    goal: 250000,
    donors: 324,
    daysLeft: 45,
    progress: 75,
    urgent: true,
    icon: Heart,
  },
  {
    title: "Innovation Lab Expansion",
    desc: "Building next-generation research facilities",
    raised: 325000,
    goal: 500000,
    donors: 156,
    daysLeft: 90,
    progress: 65,
    urgent: false,
    icon: Zap,
  },
  {
    title: "Scholarship Endowment",
    desc: "Creating lasting opportunities for future students",
    raised: 680000,
    goal: 1000000,
    donors: 892,
    daysLeft: 120,
    progress: 68,
    urgent: false,
    icon: BookOpen,
  },
];

export default function SupportSection() {
  return (
    <section className="bg-gray-50 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Support Our Mission
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Your generosity empowers students and advances excellence in
          education.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-6 text-center"
          >
            <stat.icon className="text-yellow-500 mx-auto" size={32} />
            <h3 className="text-xl font-bold mt-2 text-[#05253f]">
              {stat.label}
            </h3>
            <p className="text-gray-600 text-sm">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Campaigns Section */}
      <h3 className="text-2xl font-bold text-center mb-6">Active Campaigns</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col"
          >
            {campaign.urgent && (
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                Urgent Need
              </span>
            )}
            <div className="flex items-center gap-2 text-[#05253f] mb-2">
              <campaign.icon className="text-yellow-500" size={24} />
              <h4 className="text-lg font-semibold">{campaign.title}</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">{campaign.desc}</p>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Progress</span>
                <span>{campaign.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>
                <strong>Raised:</strong> ${campaign.raised.toLocaleString()}
              </p>
              <p>
                <strong>Goal:</strong> ${campaign.goal.toLocaleString()}
              </p>
              <p>
                <strong>Donors:</strong> {campaign.donors}
              </p>
              <p>
                <strong>Days Left:</strong> {campaign.daysLeft}
              </p>
            </div>

            <button
              className={`mt-auto py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                campaign.urgent
                  ? "bg-yellow-400 text-[#05253f] hover:opacity-90"
                  : "bg-[#05253f] text-white hover:bg-[#08345f]"
              }`}
            >
              <Heart size={16} /> Donate Now
            </button>
          </div>
        ))}
      </div>
    </section>





//

  );
}


