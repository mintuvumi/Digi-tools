import React from "react";

const Rating = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white gap-6">

        <div>
          <h3 className="text-3xl font-bold">50K+</h3>
          <p className="text-sm opacity-80">Active Users</p>
        </div>

        <div className="md:border-l md:border-r border-white/30">
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-sm opacity-80">Premium Tools</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">4.9</h3>
          <p className="text-sm opacity-80">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Rating;