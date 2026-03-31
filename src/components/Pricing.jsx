import pricing from "../data/pricing.json";

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition duration-500 transform 
              hover:-translate-y-3 hover:shadow-2xl group overflow-hidden
              ${plan.highlight 
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105" 
                : "bg-white"
              }`}
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-20"></div>
              </div>

              {/* Badge */}
              {plan.highlight && (
                <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full text-black mb-4 inline-block animate-pulse">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {plan.name}
              </h3>

              {/* Price */}
              <h1 className="text-4xl font-extrabold mb-4 relative z-10">
                ${plan.price}
                <span className="text-sm font-normal">/Month</span>
              </h1>

              {/* Features */}
              <ul className="space-y-3 mb-6 text-sm text-left relative z-10">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition"
                  >
                    <span className={plan.highlight ? "text-white" : "text-green-500"}>
                      ✔
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 rounded-full font-medium transition duration-300
                hover:scale-105 active:scale-95
                ${plan.highlight 
                  ? "bg-white text-purple-600 hover:bg-gray-100" 
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;