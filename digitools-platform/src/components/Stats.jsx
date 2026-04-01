const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9333EA] text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center text-center">

        {/* Item */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-purple-200">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>

        {/* Item */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-2">200+</h2>
          <p className="text-purple-200">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>

        {/* Item */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-purple-200">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;