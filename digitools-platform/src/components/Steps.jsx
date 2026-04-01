import user from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: user,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: rocket,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADING */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Get Started In 3 Steps
      </h2>

      <p className="text-gray-500 text-center mb-14">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-2xl p-10 text-center relative shadow-sm hover:shadow-md transition"
          >

            {/* STEP NUMBER (TOP RIGHT) */}
            <div className="absolute top-5 right-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm px-3 py-1 rounded-full">
              {step.id}
            </div>

            {/* ICON CIRCLE */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
              <img src={step.icon} className="w-10" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Steps;