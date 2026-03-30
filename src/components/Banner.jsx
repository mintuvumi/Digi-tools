import React from "react";
import bannerImg from "../assets/banner.png"; // 👉 তোমার image নাম অনুযায়ী change করবা

const Banner = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-4 py-1 rounded-full mb-5">
            ● New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-gray-500 mb-8 text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-indigo-500 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={bannerImg}
              alt="banner"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
            {/* overlay effect */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;