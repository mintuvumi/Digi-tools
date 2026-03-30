import { User, Package, Rocket } from "lucide-react";
import steps from "../data/steps.json";

const icons = {
  "01": <User size={28} />,
  "02": <Package size={28} />,
  "03": <Rocket size={28} />,
};

const GetStarted = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get Started In 3 Steps
        </h2>

        <p className="text-gray-500 mb-14">
          Start using premium digital tools in minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <span className="badge badge-primary mb-4">
                {step.id}
              </span>

              <div className="mb-4 text-primary">
                {icons[step.id]}
              </div>

              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetStarted;