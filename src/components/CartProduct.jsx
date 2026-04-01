import React from "react";

const CartProduct = ({ cart, openCart, setOpenCart, removeItem, changeQty, checkout }) => {

  
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  return (
    <>
      {openCart && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 z-50">

          <h2 className="text-lg font-bold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <p>No items</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="mb-4 border-b pb-2">

                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      X
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="btn btn-xs"
                      onClick={() => changeQty(item.id, "dec")}
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      className="btn btn-xs"
                      onClick={() => changeQty(item.id, "inc")}
                    >
                      +
                    </button>
                  </div>

                </div>
              ))}

              
              <h3 className="font-bold mt-4">
                Total: ${total.toFixed(2)}
              </h3>

              <button
                onClick={checkout}
                className="btn btn-primary w-full mt-4"
              >
                Proceed to Checkout
              </button>
            </>
          )}

          <button
            onClick={() => setOpenCart(false)}
            className="btn btn-outline w-full mt-4"
          >
            Close
          </button>

        </div>
      )}
    </>
  );
};

export default CartProduct;