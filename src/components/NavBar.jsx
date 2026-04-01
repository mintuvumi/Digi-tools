import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cart, setOpenCart }) => {

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-white px-6 md:px-16 py-4 fixed top-0 w-full z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-indigo-600">
          DigiTools
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer">Products</li>
          <li className="hover:text-indigo-600 cursor-pointer">Features</li>
          <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
          <li className="hover:text-indigo-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-indigo-600 cursor-pointer">FAQ</li>
        </ul>

        {/* RIGHT SIDE FIXED */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenCart(true)}
          >
            <ShoppingCart size={24} className="text-gray-700" />

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          </div>

          {/* BUTTONS */}
          <button className="text-gray-600 hover:text-indigo-600">
            Login
          </button>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
            Get Started
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;