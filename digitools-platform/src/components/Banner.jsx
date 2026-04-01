import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1">

          {/* Tag */}
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
            ● New: AI-Powered Tools Available
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* Primary Button */}
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300">
              Explore Products
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition">
              <img src={playIcon} className="w-4" />
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src={bannerImg} className="rounded-xl w-full" />
        </div>

      </div>
    </div>
  );
};

export default Banner;