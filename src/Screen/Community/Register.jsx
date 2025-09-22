import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }

    alert(`Thank you ${formData.name} for joining our alumni community!`);
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-4 sm:px-6 lg:px-20 text-white ">
      <div className="max-w-3xl  mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join Our Alumni Community
        </h2>
        <p className="mb-8 text-lg sm:text-xl text-blue-100">
          Stay connected, receive updates about events, and help strengthen our
          university legacy.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-white-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className=" bg-light-blue-400 w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-white-1000 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition w-full sm:w-auto"
          >
            Join Now
          </button>
        </form>

        <p className="mt-6 text-blue-200 text-sm">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </section>
  );
}
