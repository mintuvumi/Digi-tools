import React from "react";
import products from "../data/products";

const Products = ({ addToCart, cart, view, setView }) => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mb-6 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* 🔥 TOGGLE BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">

          {/* PRODUCTS BUTTON */}
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full border transition
              ${view === "products"
                ? "bg-indigo-600 text-white"
                : "bg-white text-black"}
            `}
          >
            Products
          </button>

          {/* CART BUTTON */}
          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full border transition
              ${view === "cart"
                ? "bg-indigo-600 text-white"
                : "bg-white text-black"}
            `}
          >
            Cart ({cart.length})
          </button>

        </div>

        {/* 🔥 CONDITIONAL UI */}
        {view === "products" ? (

          /* PRODUCT GRID */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition duration-300 relative"
              >

                {/* TAG */}
                <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full
                  ${product.tagType === "popular" && "bg-purple-100 text-purple-600"}
                  ${product.tagType === "new" && "bg-green-100 text-green-600"}
                  ${product.tagType === "best seller" && "bg-yellow-100 text-yellow-600"}
                `}>
                  {product.tag}
                </span>

                {/* ICON */}
                <div className="mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>

                {/* PRICE */}
                <p className="text-xl font-bold text-gray-800 mb-4">
                  ${product.price}
                  <span className="text-sm text-gray-400">/{product.period}</span>
                </p>

                {/* FEATURES */}
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {product.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-full"
                >
                  Add to Cart
                </button>

              </div>
            ))}

          </div>

        ) : (

          /* 🔥 CART VIEW */
          <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto text-left">

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                No items selected
              </p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex justify-between mb-3 border-b pb-2">
                  <span>{item.name}</span>
                  <span>{item.qty}x</span>
                </div>
              ))
            )}

          </div>

        )}

      </div>
    </section>
  );
};

export default Products;