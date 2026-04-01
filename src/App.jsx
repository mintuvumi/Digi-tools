import { useState } from "react";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Products from "./components/Products";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CartProduct from "./components/CartProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [view, setView] = useState("products");

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      const updated = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  //  Quantity change
  const changeQty = (id, type) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        if (type === "inc") return { ...item, qty: item.qty + 1 };
        if (type === "dec" && item.qty > 1)
          return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updated);
  };

  //  Toast
  const checkout = () => {
    toast.success("Order placed successfully!");
    setCart([]);
    setOpenCart(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cart={cart} setOpenCart={setOpenCart} />

      
      <div className="pt-20">

        <Banner />
        <Rating />

        
        <Products 
          addToCart={addToCart}
          cart={cart}
          view={view}
          setView={setView}
        />

        <GetStarted />
        <Pricing />
        <Footer />

      </div>

      {/* Cart Drawer */}
      <CartProduct
        cart={cart}
        openCart={openCart}
        setOpenCart={setOpenCart}
        removeItem={removeItem}
        changeQty={changeQty}
        checkout={checkout}
      />

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />

    </>
  );
}

export default App;