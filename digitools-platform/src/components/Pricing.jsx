const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADING */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-500 text-center mb-14">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* STARTER */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-1">Starter</h3>
          <p className="text-gray-500 mb-4">Perfect for getting started</p>

          <p className="text-3xl font-bold mb-6">
            $0 <span className="text-gray-400 text-base">/Month</span>
          </p>

          <ul className="space-y-2 text-gray-600 mb-8">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105 transition">
            Get Started Free
          </button>

        </div>

        {/* PRO (CENTER - SPECIAL) */}
        <div className="relative rounded-2xl p-8 text-white bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 shadow-lg scale-105">

          {/* BADGE */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>

          <h3 className="text-xl font-semibold mb-1">Pro</h3>
          <p className="text-purple-100 mb-4">Best for professionals</p>

          <p className="text-3xl font-bold mb-6">
            $29 <span className="text-purple-200 text-base">/Month</span>
          </p>

          <ul className="space-y-2 mb-8">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
            Start Pro Trial
          </button>

        </div>

        {/* ENTERPRISE */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
          <p className="text-gray-500 mb-4">For teams and businesses</p>

          <p className="text-3xl font-bold mb-6">
            $99 <span className="text-gray-400 text-base">/Month</span>
          </p>

          <ul className="space-y-2 text-gray-600 mb-8">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105 transition">
            Contact Sales
          </button>

        </div>

      </div>
    </div>
  );
};

export default Pricing;