import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WaysToGive() {
  const givingTiers = [
    {
      amount: "$50",
      title: "Supporter",
      desc: "Every contribution makes a difference",
      perks: ["Recognition on donor wall", "Thank you certificate"],
    },
    {
      amount: "$250",
      title: "Advocate",
      desc: "Meaningful impact on student life",
      perks: [
        "Alumni directory listing",
        "Exclusive updates",
        "Donor events invitation",
      ],
    },
    {
      amount: "$1,000",
      title: "Champion",
      desc: "Significant investment in our future",
      perks: [
        "Named recognition",
        "Annual report",
        "VIP event access",
        "Campus tour",
      ],
    },
    {
      amount: "$5,000",
      title: "Visionary",
      desc: "Transformative support for excellence",
      perks: [
        "Leadership circle membership",
        "President's reception",
        "Custom recognition",
        "Legacy planning",
      ],
    },
  ];

  const navigate = useNavigate();
    const Donation = (e) => {
      e.preventDefault();
      navigate("/alldonation");
 
    };

  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Ways to Give
      </h2>

      {/* Giving Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {givingTiers.map((tier, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 text-center flex flex-col hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold text-yellow-500 mb-2">
              {tier.amount}
            </h3>
            <h4 className="text-lg font-semibold text-[#05253f]">
              {tier.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">{tier.desc}</p>
            <ul className="text-left text-gray-700 text-sm space-y-2 mb-6">
              {tier.perks.map((perk, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-yellow-500">•</span> {perk}
                </li>
              ))}
            </ul>
            <button className="border border-yellow-500 text-yellow-600 rounded-md py-2 font-semibold hover:bg-yellow-50 transition">
              Choose {tier.amount}
            </button>
          </div>
        ))}
      </div>

      {/* Legacy Section */}
      <div className="bg-[#05253f] text-white max-w-4xl mx-auto rounded-xl p-8 text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-3">Create Your Legacy</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Join thousands of alumni who are making a difference. Every gift, no
          matter the size, contributes to our shared mission of excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-400 text-[#05253f] font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition"onClick={Donation} >
            <Heart size={16} /> Make a Donation
          </button>
          <button className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-md hover:bg-yellow-50/10 transition">
            Learn About Planned Giving
          </button>
        </div>
      </div>
    </section>
  );
}
