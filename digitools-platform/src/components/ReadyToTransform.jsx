const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        {/* SUBTEXT */}
        <p className="text-purple-100 mb-10">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">

          {/* PRIMARY */}
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Products
          </button>

          {/* OUTLINE */}
          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
            View Pricing
          </button>

        </div>

        {/* FOOT TEXT */}
        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTA;