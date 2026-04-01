import { useState } from "react";
import { productsData } from "../data";
import { ToastContainer, toast } from "react-toastify";

import bodyCheck from "../assets/body_check.png";
import buttonTick from "../assets/button_tick.png";


const MainSection = ({ setCartCount }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // ADD
  const handleAdd = (product) => {
    const exists = cartItems.find(i => i.id === product.id);

    if (!exists) {
      const updated = [...cartItems, product];
      setCartItems(updated);
      setCartCount(updated.length);
      toast.success("Added to cart!");
    }
  };

  // REMOVE
  const handleRemove = (id) => {
    const updated = cartItems.filter(i => i.id !== id);
    setCartItems(updated);
    setCartCount(updated.length);
    toast.error("Removed!");
  };

  // CHECKOUT
  const handleCheckout = () => {
    setCartItems([]);
    setCartCount(0);
    toast.info("Checkout complete!");
  };

  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-3">
        Premium Digital Tools
      </h2>

      <p className="text-gray-500 text-center mb-8">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      {/* TOGGLE (FIXED DESIGN) */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-full flex">

          <button
            onClick={() => setShowCart(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium ${!showCart ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white" : ""
              }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium ${showCart ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white" : ""
              }`}
          >
            Cart ({cartItems.length})
          </button>

        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      {!showCart && (
        <div className="grid md:grid-cols-3 gap-6">

          {productsData.map(product => {
            const isAdded = cartItems.find(i => i.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
              >

                {/* TOP */}
                <div className="flex justify-between items-start mb-4">
                  <img src={product.icon} className="w-10" />

                  <span className={`text-xs px-3 py-1 rounded-full ${product.tagType}`}>
                    {product.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {product.description}
                </p>

                {/* PRICE */}
                <p className="text-xl font-bold mb-3">
                  ${product.price}
                  <span className="text-gray-400 text-sm">/{product.period}</span>
                </p>

                {/* FEATURES */}
                <ul className="text-sm mb-6 space-y-2">
                  {product.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <img src={bodyCheck} className="w-4" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTON (IMPORTANT FIX HERE) */}
                <div className="mt-auto">
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition ${isAdded
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:scale-105"
                      }`}
                  >
                    {isAdded ? (
                      <>
                        <img src={buttonTick} className="w-4" />
                        Added to Cart!
                      </>
                    ) : (
                      "Buy Now"
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* ================= CART ================= */}
      {showCart && (
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h3 className="text-xl font-bold mb-6">Your Cart</h3>

          {cartItems.length === 0 && (
            <p className="text-gray-500">No items added</p>
          )}

          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.icon} className="w-10" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between mt-6 font-bold">
            <p>Total:</p>
            <p>${total}</p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleCheckout}
            className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white"
          >
            Proceed To Checkout
          </button>

        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MainSection;