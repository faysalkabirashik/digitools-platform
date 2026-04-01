import cartIcon from "../assets/products/shopping-cart.png";

const Navbar = ({ cartCount }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 border-b shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-purple-600 transition">Products</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Features</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Pricing</li>
          <li className="cursor-pointer hover:text-purple-600 transition">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-600 transition">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <img 
              src={cartIcon} 
              className="w-5 h-5 hover:scale-110 transition"
            />

            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-[1px] rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login */}
          <button className="text-gray-700 hover:text-purple-600 transition">
            Login
          </button>

          {/* CTA */}
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-2 rounded-full hover:scale-105 transition duration-300">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;