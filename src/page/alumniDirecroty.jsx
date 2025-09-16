import React from "react";

const alumniData = [
  {
    name: "Dr. Sarah Chen",
    year: "Class of 2010 • MBA",
    position: "Chief Technology Officer",
    company: "TechVision Inc.",
    location: "San Francisco, CA",
    skills: ["Technology", "Leadership", "Startups"],
    imageUrl:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Michael Rodriguez",
    year: "Class of 2008 • Engineering",
    position: "Senior Software Architect",
    company: "Google",
    location: "Mountain View, CA",
    skills: ["Software", "AI/ML", "Cloud Computing"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664461663120-b39152ba92ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Emma Thompson",
    year: "Class of 2012 • Marketing",
    position: "Global Brand Director",
    company: "Nike",
    location: "Portland, OR",
    skills: ["Marketing", "Brand Strategy", "Digital Media"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP5GhIyheAIKgy3fa1dWEr02pdYG1oXmV9sXjsCkT5yuZabsKhULfpSwXvjYEuwAJyaU&usqp=CAU",
  },
  {
    name: "David Kim",
    year: "Class of 2015 • Finance",
    position: "Investment Manager",
    company: "Goldman Sachs",
    location: "New York, NY",
    skills: ["Finance", "Investment", "Risk Management"],
    imageUrl:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function AlumniDirectory() {
    
  return (
  
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">
        Alumni Directory
      </h2>
      <p className="text-gray-600 mb-8">
        Connect with fellow graduates, discover career opportunities, and expand
        your professional network.
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search alumni by name, company, or field..."
          className="px-4 py-2 rounded-l-lg border w-96"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-lg">
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {alumniData.map((alumni, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={alumni.imageUrl}
              alt={alumni.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">
              {alumni.name}
            </h3>
            <p className="text-gray-500">{alumni.year}</p>
            <p className="font-medium mt-2">{alumni.position}</p>
            <p className="text-gray-600">{alumni.company}</p>
            <p className="text-gray-500">{alumni.location}</p>

            <div className="flex justify-center gap-2 flex-wrap mt-4">
              {alumni.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                LinkedIn
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300">
        Load More Alumni
      </button>
    </section>
  );
}
