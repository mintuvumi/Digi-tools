import pricing from "../data/pricing.json";

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 shadow transition 
              ${plan.highlight 
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105" 
                : "bg-white"
              }`}
            >

              {plan.highlight && (
                <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full text-black mb-4 inline-block">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              <h1 className="text-3xl font-bold mb-4">
                ${plan.price}
                <span className="text-sm">/Month</span>
              </h1>

              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className={`w-full py-2 rounded-full font-medium
                ${plan.highlight 
                  ? "bg-white text-purple-600" 
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
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