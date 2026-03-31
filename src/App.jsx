import { useState } from "react";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Products from "./components/Products";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CartProduct from "./components/CartProduct";

function App() {

  
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // 🔥 2. add to cart function
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

  // 🔥 3. remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // 🔥 4. qty change
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

  // 🔥 5. checkout
  const checkout = () => {
    alert("Order Done ✅");
    setCart([]);
    setOpenCart(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cart={cart} setOpenCart={setOpenCart} />

      <Banner />
      <Rating />

      
      <Products addToCart={addToCart} />

      <GetStarted />
      <Pricing />
      <Footer />

      {/* 🔥 Cart Drawer */}
      <CartProduct
        cart={cart}
        openCart={openCart}
        setOpenCart={setOpenCart}
        removeItem={removeItem}
        changeQty={changeQty}
        checkout={checkout}
      />
    </>
  );
}

export default App;