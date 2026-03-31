import React from "react";

const Navbar = ({ cart, setOpenCart }) => {
  return (
    <nav className="bg-white px-6 md:px-16 py-4 fixed top-0 w-full z-50">
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
         <div
            className="relative cursor-pointer"
            onClick={() => setOpenCart(true)}  
          >
          🛒
            
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </div>

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